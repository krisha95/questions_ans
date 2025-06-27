import avatar03 from "@/assets/images/avatar/03.jpg";
import Image from "next/image";
import Link from "next/link";
import { Col, Form } from "react-bootstrap";
import {
    BsCalendarEvent,
    BsClockHistory,
    BsEye,
    BsGeoAltFill,
    BsHourglassBottom,
    BsJournal,
    BsPencilSquare,
    BsTicket,
} from "react-icons/bs";

const Rightsidebar = () => {
    return (
        <Col xl={3} xxl={2}>
            <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvassidebar">
                <div className="offcanvas-header">
                    <button
                        type="button"
                        className="btn-close text-reset ms-auto"
                        data-bs-target="#offcanvassidebar"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>

                <div className="offcanvas-body flex-column p-0">
                    <div className="card card-chat rounded-0 pb-3">
                        <Link
                            href="#"
                            className="btn btn-sm btn-round btn-light position-absolute top-0 end-0 m-3"
                            data-bs-toggle="tooltip"
                            data-bs-title="Edit profile"
                        >
                            <BsPencilSquare />
                        </Link>

                        <div className="card-header text-center border-bottom">
                            <div className="avatar avatar-xl position-relative mb-0">
                                <Image
                                    className="avatar-img rounded-circle border border-2 border-white"
                                    src={avatar03}
                                    alt="avatar"
                                />
                            </div>
                            <h5 className="mb-1">Louis Ferguson</h5>
                            <p className="small mb-1">Recruiting Officer @webestica</p>
                            <Link href="#" className="text-primary-hover fw-normal">
                                <BsGeoAltFill className="text-primary me-1" />
                                New York, USA
                            </Link>
                        </div>

                        <div className="card-body card-chat-list custom-scrollbar">
                            <div className="mb-2">
                                <Form.Label className="form-label h6 fw-normal heading-color">Agent</Form.Label>
                                <Form.Select className="js-choice" aria-label="Select Agent">
                                    <option>Agent one</option>
                                    <option>Agent two</option>
                                    <option>Agent three</option>
                                </Form.Select>
                            </div>

                            <div className="mb-4">
                                <Form.Label className="form-label h6 fw-normal heading-color">Select</Form.Label>
                                <Form.Select className="js-choice" aria-label="Select Category">
                                    <option>General Enquiry</option>
                                    <option>Social network</option>
                                    <option>Community enquiry</option>
                                </Form.Select>
                            </div>

                            <h6 className="mb-3">Ticket info</h6>

                            {[
                                { icon: <BsTicket />, label: "Ticket", value: "#245896" },
                                {
                                    icon: <BsJournal />,
                                    label: "Customer note",
                                    value: (
                                        <Link
                                            href="#"
                                            className="fw-normal mb-0"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalCustomerNote"
                                        >
                                            View customer notes
                                        </Link>
                                    ),
                                },
                                { icon: <BsEye />, label: "Visibility", value: "Private" },
                                { icon: <BsCalendarEvent />, label: "Created", value: "Last Monday 2:30 PM" },
                                { icon: <BsClockHistory />, label: "Updated", value: "2 Days ago" },
                                { icon: <BsHourglassBottom />, label: "Average response time", value: "5 Hours" },
                            ].map((item, idx) => (
                                <div className="d-flex mb-2" key={idx}>
                                    <div className="icon-md text-bg-light rounded-circle flex-shrink-0 mb-3 d-flex align-items-center justify-content-center">
                                        {item.icon}
                                    </div>
                                    <div className="ms-2">
                                        <p className="small mb-0">{item.label}</p>
                                        <p className="heading-color fw-normal mb-0">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Rightsidebar;
