async function getBuild() {
    const response = await fetch('/build', {
            method: 'GET',
        });
    if (!response.ok){
        console.log(response);
        throw new Error(`HTTP error! status: ${response.status}`);
    };
    const build = await response.text();
    return build;
}

export { getBuild };