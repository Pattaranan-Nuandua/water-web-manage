export interface AddProps {
    adduser: {
        username: string;
        firstname: string;
        lastname: string;
        usertype: string;
        usergroup: string;
        resetpassword: string;
    }[];
}

export interface ResetPass{
    resetpass:{
        newpassword: string;
        confirmpassword: string;
    }[];
}
