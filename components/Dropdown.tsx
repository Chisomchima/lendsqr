import React, { useEffect, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiUserX } from 'react-icons/fi'
import { GrUserExpert } from 'react-icons/gr'
import { BsEye } from 'react-icons/bs'
import styles from '../styles/table.module.scss';
import { useRouter } from 'next/router';
interface DropdownCellProps {
    userId: string;
}

const DropdownCell: React.FC<DropdownCellProps> = ({ userId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (action: string) => {
        if (action === 'view') {
            router.push(`/userDetails/${userId}`);
        } else if (action === 'blacklist') {
            router.push(`/userDetails/${userId}`);
        } else if (action === 'activate') {
            router.push(`/userDetails/${userId}`);
        }

        // Close the dropdown after performing the action
        setIsOpen(false);
    };

    return (
        <div className={styles.dropdownCell}>
            <div className={styles.dropdownToggle} onClick={handleToggle}>
                <BiDotsVerticalRounded />
            </div>
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownItem} onClick={() => handleItemClick('view')}>
                        <BsEye className={styles.dropdownIcon} />
                        <span>View Details</span>
                    </div>
                    <div className={styles.dropdownItem} onClick={() => handleItemClick('blacklist')}>
                        <FiUserX className={styles.dropdownIcon} />
                        <span>Blacklist User</span>
                    </div>
                    <div className={styles.dropdownItem} onClick={() => handleItemClick('activate')}>
                        <GrUserExpert className={styles.dropdownIcon} />
                        <span>Activate User</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownCell