export class Users {
    public id: number;
    public name: string;
    public img_profile: string;
    public username: string;
    public email: string;
    public pwd: string;
    public lvl_perm: number;

    constructor(id: number, name: string, img_profile: string, username: string, email: string, pwd: string, lvl_perm: number) {
        this.id = id;
        this.name = name;
        this.img_profile = img_profile;
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.lvl_perm = lvl_perm;
       
    }
}