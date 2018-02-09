//generates table data to mock a RESTfull endpoint
export const generateData = (number) => {
    let generatedData = [];
    for(let i = 0; i <= number; i++) {
        generatedData.push({
            "name": `host${ i + 1}`,
            "hostname": `nessus-${Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}-lab.com`,
            "port": `${Math.floor(1000 + Math.random() * 9000)}`,
            "username": `${Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}`
        })
    }
    return {"configurations": generatedData}
};

//generates url needed for fetching ajax table data
export const getUrl = (serverId, host, page = 0, sizePerPage = 10) =>
    `${serverId}/download/request?host=${host}&page=${page}&sizePerPage=${sizePerPage}`;