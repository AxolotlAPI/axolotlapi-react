import Cookies from "js-cookie";

export default function PageDashboard() {
    if (Cookies.get("accessToken") === undefined) window.location.href = "/login";

    return (
        <>
            <span>Uninplemented</span>
        </>
    );
}