import { FaArrowUp } from 'react-icons/fa'



const FaArrowUpStyle = {
    color: "darkcyan",
    fontSize: "20px"
}
function Footer() {
    return (
        <div>
            <form className="footerForm">
                <button  >
                    <FaArrowUp style={ FaArrowUpStyle} />
                </button>
            </form>
        </div>
    );
}
export default Footer;