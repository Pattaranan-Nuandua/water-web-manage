export interface AFVusers {
    username: string;
    name: string;
    lastname: string;
    usertype: string;
    usergroup: string;
    resetpassword: string;
    sw_version: string;
}

export const GetAFVusers = () => {
    const mockafvusers: AFVusers[] = [];
    for (let i = 0; i < 10; i++) {
        let last4ID = Math.floor(Math.random() * 10000);
        mockafvusers.push({
            username: `AFV_${last4ID}`,
            name: `DW0165_${last4ID}`,
            lastname: `DW0265_${last4ID}`,
            usertype: `DW0365_${last4ID}`,
            usergroup: `DW0465_${last4ID}`,
            resetpassword: `DW0565_${last4ID}`,
            sw_version: "0.0.0",
        })
    }
    console.log(mockafvusers);

    return mockafvusers;
}