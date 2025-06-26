import QuillTool from "@/component/QuillTool";
import { Button, Card } from "react-bootstrap";

const AnswerCard = () => {
  return (
    <Card className="card-body p-4">
      <h4 className="mb-3">Your Answer</h4>

      <QuillTool className="bg-mode border rounded-bottom h-200px overflow-hiddend  rounded-top" />

      <div className="my-3">
        <label className="form-label">Upload file</label>
        <input
          className="form-control"
          type="file"
          name="my-image"
          id="image"
          accept="image/gif, image/jpeg, image/png"
        />
        <small>
          <b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions are
          600px * 450px.
        </small>
      </div>

      <div>
        <Button variant="primary" className="mt-2 mb-0">
          Post Your Answer
        </Button>
      </div>
    </Card>
  );
};

export default AnswerCard;
