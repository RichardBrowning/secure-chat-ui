function isUUID(uuid) {
    const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return regex.test(uuid);
}

async function getBuild() {
    const response = await fetch('http://localhost:8080/build', {
            method: 'GET',
        });
    if (!response.ok){
        console.log(response);
        throw new Error(`HTTP error! status: ${response.status}`);
    };
    const build = await response.text();
    if (!isUUID(build)) {
        throw new Error(`Invalid build number: ${build}`);
    }
    return build;
}

export { getBuild };