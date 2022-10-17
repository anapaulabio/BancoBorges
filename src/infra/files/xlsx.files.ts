import { IFiles } from "./files.interface";
import xlsx from 'xlsx';

class xlsxFiles implements IFiles {
    parse(filename: string): any[] {
        const data = xlsx.read(filename);
        return xlsx.utils.sheet_to_json(data.Sheets[data.SheetNames[0]])    
    }
}

export default new xlsxFiles;