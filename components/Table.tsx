import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { DateTime } from 'luxon';
import DataTable from 'react-data-table-component';
import { BiFilter } from 'react-icons/bi';
import styles from '../styles/table.module.scss';
import { getUsersData } from '../Service';
import UserData from '../types';
import DropdownCell from './Dropdown';

interface User extends UserData {
  id: string;
}
type TableProps = {
  showFilter: boolean;
};
type CustomColumn = {
  name?: string;
  selector?: string;
  sortable?: boolean;
  width?: string;
  cell?: (row: UserData) => React.ReactNode;
  header?: (column: CustomColumn) => React.ReactNode;
};

interface FilterValues {
  organization: string;
  username: string;
  phone: string;
  email: string;
  status: string;
  date: string;
}

const columns: CustomColumn = [
  {
    name: 'Organization',
    selector: 'orgName',
    sortable: true,
    width: '150px',
  },
  {
    name: 'Username',
    selector: 'userName',
    sortable: true,
    width: '140px',
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    width: '140px',
  },
  {
    name: 'Phone number',
    selector: 'phoneNumber',
    sortable: true,
    width: '180px',
  },
  {
    name: 'Date joined',
    selector: 'createdAt',
    sortable: true,
    width: '190px',
    cell: (row: User) => {
      const formattedDate = DateTime.fromISO(row.createdAt).toFormat('LLL dd, yyyy h:mm a');
      return <div>{formattedDate}</div>;
    },
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    sortIcon: <BiFilter />,
    sortIndicator: () => <BiFilter />,
    cell: (row: User) => {
      const lastActiveDate = new Date(row.lastActiveDate);
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      threeMonthsAgo.setHours(0, 0, 0, 0);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let statusColor: string;
      let statusText: string;
      let statusTextColor: string;

      if (lastActiveDate >= today) {
        statusColor = '#e9b30013';
        statusText = 'Pending';
        statusTextColor = '#E9B200';
      } else if (lastActiveDate >= threeMonthsAgo) {
        statusColor = '#39cd6326';
        statusText = 'Active';
        statusTextColor = '#39CD62';
      } else {
        statusColor = '#545f7d29';
        statusText = 'Inactive';
        statusTextColor = '#545F7D';
      }

      return (
        <div
          style={{
            backgroundColor: statusColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: statusTextColor,
            width: '100%',
            padding: '6px 7px',
            borderRadius: '100px',
          }}
        >
          {statusText}
        </div>
      );
    },
  },
  {
    name: '',
    cell: (row: User) => <DropdownCell userId={row.id} />,
    sortable: false,
  },
];

const Table: React.FC<TableProps> = ({ showFilter }) => {
  const [tableData, setTableData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const itemsPerPageOptions = [10, 20, 50, 100];
  const [filterValues, setFilterValues] = useState<FilterValues>({
    organization: '',
    username: '',
    phone: '',
    email: '',
    status: '',
    date: '',
  });

  useEffect(() => {
    fetchData();

  }, []);
  
  useEffect(() => {
    const tableIcon = document.querySelectorAll('.KUTzo');
    tableIcon.forEach((el) => {
      if (el) {
        // el.innerHTML = `<div>${<BiFilter />}</div>`
        ReactDOM.render(<BiFilter />, el);
      }
    })

  }, [tableData, currentPage, rowsPerPage, itemsPerPageOptions, filterValues]);

  const fetchData = async () => {
    const usersData = await getUsersData();
    setTableData(usersData);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handleFilter = () => {
    const filteredData = tableData.filter((item) => {
      const { organization, username, phone, email, status, date } = filterValues;
      return (
        item.orgName.toLowerCase().includes(organization.toLowerCase()) &&
        item.userName.toLowerCase().includes(username.toLowerCase()) &&
        item.phoneNumber.toLowerCase().includes(phone.toLowerCase()) &&
        item.email.toLowerCase().includes(email.toLowerCase()) &&
        // item.status.toLowerCase().includes(status.toLowerCase()) &&
        item.createdAt.toLowerCase().includes(date.toLowerCase())
      );
    });

    setTableData(filteredData);
  };

  const handleClearAll = () => {
    setFilterValues({
      organization: '',
      username: '',
      phone: '',
      email: '',
      status: '',
      date: '',
    });
    fetchData();
  };


  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return tableData.slice(startIndex, endIndex);
  }, [currentPage, rowsPerPage, tableData]);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const renderPagination = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const displayPageNumbers =
      totalPages <= 7
        ? pageNumbers
        : currentPage <= 4
          ? [...pageNumbers.slice(0, 4), '...', ...pageNumbers.slice(-3)]
          : currentPage >= totalPages - 3
            ? [...pageNumbers.slice(0, 3), '...', ...pageNumbers.slice(-4)]
            : [
              ...pageNumbers.slice(0, 2),
              '...',
              ...pageNumbers.slice(currentPage - 2, currentPage + 1),
              '...',
              ...pageNumbers.slice(-3),
            ];

    return (
      <nav className={styles.pagination}>
        <ul className={styles.pagination}>
          <li
            className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <a className={styles.pageLink} href="#" aria-label="Previous">
              <span aria-hidden="true">&lt;</span>
            </a>
          </li>
          {displayPageNumbers.map((pageNumber, index) => (
            <li
              key={index}
              className={`${styles.pageItem} ${currentPage === Number(pageNumber) ? styles.active : ''
                }`}
              onClick={() => handlePageChange(Number(pageNumber))}
            >
              <a className={styles.pageLink} href="#">
                {pageNumber === '...' ? '...' : pageNumber}
              </a>
            </li>
          ))}
          <li
            className={`${styles.pageItem} ${currentPage === totalPages ? styles.disabled : ''
              }`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <a className={styles.pageLink} href="#" aria-label="Next">
              &gt;
            </a>
          </li>
        </ul>
      </nav>
    );
  };


  return (
    <div className={styles.container}>
      {showFilter &&
        (<div className={styles.filter}>
          <div className={styles.inputs}>
            <label htmlFor="organization">Organization</label>
            <select
              id="organization"
              value={filterValues.organization}
              onChange={(e) =>
                setFilterValues((prevState) => ({
                  ...prevState,
                  organization: e.target.value,
                }))
              }
            >
              <option value="">Select</option>
              <option value="organization1">Organization 1</option>
              <option value="organization2">Organization 2</option>
              {/* Add more options for each organization */}
            </select>
          </div>

          <div className={styles.inputs}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="User"
              value={filterValues.username}
              onChange={(e) =>
                setFilterValues((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
            />
          </div>

          <div className={styles.inputs}>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              value={filterValues.phone}
              onChange={(e) =>
                setFilterValues((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            />
          </div>

          <div className={styles.inputs}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={filterValues.email}
              onChange={(e) =>
                setFilterValues((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </div>

          <div className={styles.inputs}>
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              placeholder="Status"
              value={filterValues.status}
              onChange={(e) =>
                setFilterValues((prevState) => ({
                  ...prevState,
                  status: e.target.value,
                }))
              }
            />
          </div>

          <div className={styles.inputs}>
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              placeholder="Date"
              value={filterValues.date}
              onChange={(e) =>
                setFilterValues((prevState) => ({
                  ...prevState,
                  date: e.target.value,
                }))
              }
            />
          </div>

          <div className={styles.buttons}>
            <button onClick={handleFilter}>Reset</button>
            <button onClick={handleClearAll}>Filter</button>
          </div>

        </div>)}
      <div className={styles.table}>
        <DataTable
          columns={columns}
          data={paginatedData}
          responsive
          paginationPerPage={rowsPerPage}
        />
      </div>
      <div className={styles.rows}>
        <div className={styles.rowsPerPage}>
          <span>Showing</span>
          <select
            className={styles.select}
            value={rowsPerPage}
            onChange={(e) => handleRowsPerPageChange(parseInt(e.target.value))}
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span>out of 100</span>
        </div>
        {renderPagination()}
      </div>
    </div>

  );
};

export default Table;


