import { CSVLink } from 'react-csv';

const ExportCSV = ({ data }) => (
    <button>
        <CSVLink data={data} filename="songs.csv">Download CSV</CSVLink>
    </button>
);
export default ExportCSV;
