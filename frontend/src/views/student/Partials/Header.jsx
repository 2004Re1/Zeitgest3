import React, { useContext } from "react";
import { ProfileContext } from "../../plugin/Context";

function Header() {
    const [profile, setProfile] = useContext(ProfileContext);

    return (
        <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            </div>
        </div>
    );
}

export default Header;
