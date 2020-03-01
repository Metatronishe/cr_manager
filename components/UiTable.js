import MUIDataTable from "mui-datatables";

const columns = [
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "role",
        label: "Role",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "donations",
        label: "Donations",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "donationsReceived",
        label: "Cards Received",
        options: {
            filter: true,
            sort: true,
        }
    },
];

const options = {
    filterType: 'dropdown',
    sortFilterList: true,
    sort: true,
    filter: true,

};

export default function Table(data) {
    return (
        <MUIDataTable
            title={"Players List"}
            data={data}
            columns={columns}
            options={options}
        />
    );
}

