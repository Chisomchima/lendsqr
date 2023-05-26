import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import DataTable from 'react-data-table-component';
import Link from 'next/link';
import { BiFilter, BiDotsVerticalRounded } from 'react-icons/bi';
import styles from '../styles/table.module.scss';
import { getUsersData } from '../Service';
import UserData from '../types';

interface User extends UserData {
  id: string;
}
const columns = [
  {
    name: 'Organization',
    selector: 'orgName',
    sortable: true,
    sortIndicator: <BiFilter />,
    width: '150px',
  },
  {
    name: 'Username',
    selector: 'userName',
    sortable: true,
    sortIndicator: <BiFilter />,
    width: '140px',
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    sortIndicator: <BiFilter />,
    width: '140px',
  },
  {
    name: 'Phone number',
    selector: 'phoneNumber',
    sortable: true,
    sortIndicator: <BiFilter />,
    width: '180px',
    // cell: (row: User) => <div>{formatPhoneNumber(row.phoneNumber)}</div>,
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
    sortIndicator: <BiFilter />,
    cell: (row: User) => {
      const lastActiveDate = new Date(row.lastActiveDate);
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      threeMonthsAgo.setHours(0, 0, 0, 0);
    
      const today = new Date();
      today.setHours(0, 0, 0, 0);
    
      let statusColor: string;
      let statusText: string;
      let  textColors: string;
    
      if (lastActiveDate > today) {
        statusColor = '#e9b30013';
        textColors:'#E9B200';
        statusText = 'Pending';
      } else if (lastActiveDate > threeMonthsAgo) {
        statusColor = 'green';
        textColor:'#E9B200';
        statusText = 'Active';
      } else {
        statusColor = 'red';
        textColor:'#E9B200';
        statusText = 'Inactive';
      }
    
      return <div style={{ backgroundColor: statusColor, color: textColors, padding: '5px 7px', borderRadius: "100px", }}>{statusText}</div>;
    },
    
    
  },
  {
    name: '',
    cell: (row: User) => (
      <Link href={`/userDetails/${row.id}`}>
        {/* <a> */}
          <BiDotsVerticalRounded />
        {/* </a> */}
      </Link>
    ),
    sortable: false,
  },
];

const Table: NextPage = () => {
  const [tableData, setTableData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const itemsPerPageOptions = [10, 20, 50, 100];

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsersData();
      setTableData(usersData);
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const paginatedData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    const displayPageNumbers = [];

    if (totalPages <= 7) {
      displayPageNumbers.push(...pageNumbers);
    } else if (currentPage <= 4) {
      displayPageNumbers.push(...pageNumbers.slice(0, 4), '...');
      displayPageNumbers.push(...pageNumbers.slice(-3));
    } else if (currentPage >= totalPages - 3) {
      displayPageNumbers.push(...pageNumbers.slice(0, 3));
      displayPageNumbers.push('...', ...pageNumbers.slice(-4));
    } else {
      displayPageNumbers.push(...pageNumbers.slice(0, 2));
      displayPageNumbers.push('...');
      displayPageNumbers.push(...pageNumbers.slice(currentPage - 2, currentPage + 1));
      displayPageNumbers.push('...');
      displayPageNumbers.push(...pageNumbers.slice(-3));
    }

    return (
      <nav>
        <ul className="pagination">
          <li
            className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {displayPageNumbers.map((pageNumber, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === Number(pageNumber) ? 'active' : ''}`}
              onClick={() => handlePageChange(Number(pageNumber))}
            >
              <a className="page-link" href="#">
                {pageNumber === '...' ? '...' : pageNumber}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  };



  return (
    <div className={styles.table}>
      <DataTable
        columns={columns}
        data={paginatedData}
        responsive
        // pagination
        paginationPerPage={rowsPerPage}
      />
      <div className={styles.pagination}>
        <div className={styles.rowsPerPage}>
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => handleRowsPerPageChange(parseInt(e.target.value))}
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {renderPagination()}
      </div>
    </div>
  );
};

export default Table;
