"use client";
import avatar06 from "@/assets/images/avatar/06.jpg";
import Image from 'next/image';
import {
    Alert,
    AlertHeading,
    Form,
    FormControl,
    FormSelect,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader
} from 'react-bootstrap';

const RightSide = ({ show, handleClose }: { show: boolean, handleClose: () => void }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true} backdrop={false} className="bg-mode">
            <OffcanvasHeader closeButton className="justify-content-end px-4" />
            <OffcanvasBody className="d-flex flex-column p-3 pt-0">

                <h4>Open Questions to Everyone</h4>
                <p>Embrace the power of community knowledge by asking your questions publicly.</p>

                <div className="avatar avatar-xs flex-shrink-0 me-2 mb-3">
                    <Image className="avatar-img rounded-circle" src={avatar06} alt="avatar" />
                </div>

                <Form className="w-100 choice-bg-light mb-5">
                    <FormControl
                        as="textarea"
                        className="bg-light fs-5 mb-3"
                        rows={5}
                        placeholder="Share your question..."
                        autoFocus
                        spellCheck={false}
                    />
                    <FormSelect className="js-choice" defaultValue="">
                        <option value="" disabled>Select categories</option>
                        <option>History</option>
                        <option>Technology</option>
                        <option>Business & Finance</option>
                        <option>Health</option>
                        <option>Language & Literature</option>
                    </FormSelect>
                </Form>

                <Alert variant="success" className="mt-auto">
                    <AlertHeading>Guidelines for Receiving Quality Answers</AlertHeading>
                    <ul className="mb-0">
                        <li>Ensure that your questions hasn't been previously posed</li>
                        <li>Keep your questions concise and focused for optimal clarity.</li>
                        <li>Double check grammar and spelling</li>
                    </ul>
                </Alert>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default RightSide;
