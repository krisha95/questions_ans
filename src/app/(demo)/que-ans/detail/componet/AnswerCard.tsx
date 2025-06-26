import QuillTool from '@/component/QuillTool'
import React from 'react'
import { Card } from 'react-bootstrap'
import { FaPhotoFilm } from 'react-icons/fa6'

const AnswerCard = () => {
    return (
        <Card className="scard-body p-4">
            <h4>Your Answer</h4>

            <QuillTool className='quilleditor bg-mode border rounded-top rounded-bottom h-150px overflow-hidden' />

            <div className="justify-content-center align-items-center my-3">
                <label className="form-label">Upload files*</label>
                <div className="mt-1">
                    <label htmlFor="uploadfile-1" title="Replace this pic">
                        <span className="p-3 border rounded fs-1 text-secondary">
                            <FaPhotoFilm />
                        </span>
                    </label>
                    <input id="uploadfile-1" className="form-control d-none" type="file" />
                </div>
            </div>

            <button className="btn btn-primary mb-0 mt-2">Post Your Answer</button>
        </Card>
    )
}

export default AnswerCard