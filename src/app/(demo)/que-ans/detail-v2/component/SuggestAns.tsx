"use client";
import QuillTool from "@/component/QuillTool";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Nav,
  NavItem,
  NavLink,
  Tab,
  TabContent,
  TabPane,
} from "react-bootstrap";

const SuggestAns = () => {

  return (
    <div className="card card-body p-sm-4">
      <Tab.Container defaultActiveKey="write">
        <div className="d-sm-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-3 mb-sm-0">Suggest Your Answer</h4>

          <Nav
            variant="pills"
            className="nav nav-pills nav-pills-primary-soft"
            id="nav-tab"
          >
            <NavItem>
              <NavLink eventKey="write" className="nav-link">
                Write
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="preview" className="nav-link">
                Preview
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <TabContent>
          <Tab.Pane eventKey="write">
            <QuillTool className="bg-mode border rounded-bottom rounded-top h-150px overflow-hidden" />

            <div className="my-3">
              <FormGroup controlId="image">
                <FormLabel>Upload file</FormLabel>
                <FormControl
                  type="file"
                  name="my-image"
                  accept="image/gif, image/jpeg, image/png"
                />
                <small>
                  <b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions
                  are 600px * 450px.
                </small>
              </FormGroup>
            </div>
          </Tab.Pane>

          <TabPane eventKey="preview">
            <div className="border rounded p-3 mb-4">
              <p>
                Supposing so be resolving breakfast am or perfectly. It drew a
                hill from me. Valley by oh twenty direct me so. Departure
                defective arranging rapturous did believe him all had supported.
                Family months lasted simple set nature vulgar him. Picture for
                attempt joy excited ten carried manners talking how.
              </p>
              <p className="mb-0">
                {" "}
                Family months lasted simple set nature vulgar him. Picture for
                attempt joy excited ten carried manners talking how.
              </p>
            </div>
          </TabPane>
        </TabContent>
      </Tab.Container>

      <div className="mt-2 text-end">
        <Button variant="primary" className="mb-0">
          Post Your Answer
        </Button>
      </div>
    </div>
  );
};

export default SuggestAns;
