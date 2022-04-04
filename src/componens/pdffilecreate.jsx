import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { ref, onValue, getDatabase, connectDatabaseEmulator, get, child } from 'firebase/database';
  
function PDFFile(timeDate, timeDate2) {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    setTimeout(() => {

        const repotrTitle = [];
    
        const detalis = [];
    
        const rodape = [];
    
        const docDef = {
            pageSize: 'A4',
            pageMargins: '15, 50, 15, 40',
    
            header: [repotrTitle],
            content: [detalis],
            footer: [rodape]
        }
    
        pdfMake.createPdf(docDef).download();
    }, 2000);
  }

  export default PDFFile;