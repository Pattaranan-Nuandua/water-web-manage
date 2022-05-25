import { addMinutes } from "date-fns";

export interface IAfvData {
    device_id: string;
    device_name: string;
    type: string;
    timestamp: Date;
    presure: number;
    totalize: number;
    battery: number;
    solar: number;
    csq: number;
    sw_version: string;
}

export const GetAfvCurrentDatas = () => {
    let date = new Date();
    const mockAfvCurrentData: IAfvData[] = [];
    for (let i = 0; i < 10; i++) {
        let last4ID = Math.floor(Math.random() * 10000);
        mockAfvCurrentData.push({
            type: "AFV",
            device_name: `AFV_${last4ID}`,
            device_id: `DW0565-${last4ID}`,
            timestamp: addMinutes(date, i),
            presure: Math.floor(Math.random() * 10),
            totalize: Math.floor(Math.random() * 100),
            battery: Math.floor(Math.random() * 12),
            solar: Math.floor(Math.random() * 12),
            csq: Math.floor(Math.random() * 4),
            sw_version: "0.0.0",
        })
    }

    return mockAfvCurrentData;
}

export const GetAfvTelemetryData = (device_id: string, start?: Date, end?: Date, limit?: number, offset?: number) => {
    let date = new Date();
    const mockAfvTelemetryData: IAfvData[] = [];
    for (let i = 0; i < 100; i++) {
        mockAfvTelemetryData.push({
            type: "AFV",
            device_name: `AFV_${device_id.replace("AFV", "")}`,
            device_id: device_id,
            timestamp: addMinutes(date, i),
            presure: Math.floor(Math.random() * 10),
            totalize: Math.floor(Math.random() * 100),
            battery: Math.floor(Math.random() * 12),
            solar: Math.floor(Math.random() * 12),
            csq: Math.floor(Math.random() * 4),
            sw_version: "0.0.0",
        })
    }
    // console.log(mockAfvTelemetryData);

    return mockAfvTelemetryData;
}