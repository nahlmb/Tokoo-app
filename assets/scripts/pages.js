//PAGES-API : api untuk berganti halaman
const injectPage = async (page) => {
    const pageFetch = await fetch(page);
    const pageData = await pageFetch.text();
    document.querySelector('body').innerHTML = pageData;
    pageUtilsRun()
}



