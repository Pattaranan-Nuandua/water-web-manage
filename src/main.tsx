import * as tsImport from 'ts-import';

export const Main = async () => {
    const filePath = `C:/Users/Pn289/water-web-manage/src/userAPI.ts`;
    const asyncResult = await tsImport.load(filePath);
    const syncResult = tsImport.loadSync(filePath);
};

