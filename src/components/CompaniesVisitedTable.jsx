import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import DataTable from 'react-data-table-component';
import { FunnelIcon, MagnifyingGlassIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';

// Sample data for companies
const companiesData = [
  {
    id: 1,
    date: "2023-07-15",
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    sector: "Technology",
    package: "18 LPA",
    students: 25
  },
  {
    id: 2,
    date: "2023-07-18",
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    sector: "Technology",
    package: "20 LPA",
    students: 15
  },
  {
    id: 3,
    date: "2023-07-20",
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    sector: "Technology",
    package: "19 LPA",
    students: 12
  },
  {
    id: 4,
    date: "2023-07-22",
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    sector: "E-commerce",
    package: "16 LPA",
    students: 30
  },
  {
    id: 5,
    date: "2023-07-25",
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    sector: "IT Services",
    package: "8 LPA",
    students: 45
  },
  {
    id: 6,
    date: "2023-07-28",
    name: "TCS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    sector: "IT Services",
    package: "7.5 LPA",
    students: 50
  },
  {
    id: 7,
    date: "2023-08-01",
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Wipro_Logo.svg",
    sector: "IT Services",
    package: "7 LPA",
    students: 40
  },
  {
    id: 8,
    date: "2023-08-05",
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    sector: "Consulting",
    package: "9 LPA",
    students: 35
  },
  // Add more entries up to 204
];

// Define table columns
const columns = [
  {
    name: "S.No",
    selector: (row) => row.id,
    sortable: true,
    width: "80px",
    center: true,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
    width: "120px",
  },
  {
    name: "Company Logo",
    cell: (row) => (
      <div className="flex justify-center">
        <img
          src={row.logo}
          alt={row.name}
          className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full border p-1 bg-white shadow-sm"
        />
      </div>
    ),
    width: "120px",
    center: true,
  },
  {
    name: "Company Name",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => <span className="font-medium text-gray-700">{row.name}</span>,
  },
  {
    name: "Sector",
    selector: (row) => row.sector,
    sortable: true,
    omit: window.innerWidth < 768, // Hide on mobile
  },
  {
    name: "Package (LPA)",
    selector: (row) => row.package,
    sortable: true,
    right: true,
    width: "140px",
  },
  {
    name: "Students Placed",
    selector: (row) => row.students,
    sortable: true,
    right: true,
    width: "150px",
    omit: window.innerWidth < 1024, // Hide on smaller screens
  },
];

// Custom styles for react-data-table-component
const customStyles = {
  header: {
    style: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1E40AF",
      padding: "0 0 1rem 0",
    },
  },
  headRow: {
    style: {
      backgroundColor: "#1E3A8A",
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: "16px",
      minHeight: "60px",
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      justifyContent: 'flex-start',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  rows: {
    style: {
      minHeight: "60px",
      fontSize: "15px",
      '&:not(:last-of-type)': {
        borderBottom: '1px solid #e5e7eb',
      },
    },
    highlightOnHoverStyle: {
      backgroundColor: '#EFF6FF',
      transitionDuration: '0.15s',
      transitionProperty: 'background-color',
    },
  },
  pagination: {
    style: {
      borderTop: "1px solid #e5e7eb",
      paddingTop: "12px",
      fontSize: "14px",
    },
  },
};

// Custom table header component
const CustomTableHeader = ({ onFilter, onClear, filterText }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 w-full">
      <h2 className="text-3xl font-bold text-center text-blue-900">Companies Visited in 2023-2024</h2>
      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 w-full md:w-auto justify-center"
          onClick={onClear}
        >
          <FunnelIcon className="h-4 w-4 mr-2" />
          Clear Filter
        </motion.button>
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search companies..."
            value={filterText}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 w-full"
            onChange={(e) => onFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const CompaniesVisitedTable = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = companiesData.filter(
    item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <CustomTableHeader 
        onFilter={setFilterText}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-md overflow-x-auto">
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        highlightOnHover
        responsive
        customStyles={customStyles}
        striped
        defaultSortFieldId={1}
        sortIcon={<ChevronUpDownIcon className="w-4 h-4" />}
        paginationComponentOptions={{
          rowsPerPageText: 'Rows per page:',
          rangeSeparatorText: 'of',
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: 'All',
        }}
      />
    </div>
  );
};

export default CompaniesVisitedTable;
