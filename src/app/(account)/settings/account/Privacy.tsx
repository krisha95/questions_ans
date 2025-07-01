"use client"
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardHeader, FormCheck } from 'react-bootstrap'

const Privacy = () => {
    const [searchEngine, setSearchEngine] = useState(true)
    const [adultContent, setAdultContent] = useState(false)
    const [discoverByEmail, setDiscoverByEmail] = useState(true)
    const [messageOption, setMessageOption] = useState('option2')
    const [allowComment, setAllowComment] = useState(true)
    const [allowTranslate, setAllowTranslate] = useState(false)
    const [allowGifs, setAllowGifs] = useState(true)
    const [allowPromote, setAllowPromote] = useState(true)
    const [notifySubscribers, setNotifySubscribers] = useState(true)

    return (
        <>
            <Card className="p-0">
                <CardHeader className="border-bottom p-4">
                    <h4 className="card-title">Privacy Settings</h4>
                    <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Unaffected at ye of compliment alteration to.</p>
                </CardHeader>
                <CardBody className="p-4">
                    <Accordion defaultActiveKey="0" id="communications">
                        {/* General setting */}
                        <AccordionItem eventKey="0" className="bg-transparent">
                            <AccordionHeader>
                                <span className="h6 mb-0">General setting</span>
                            </AccordionHeader>
                            <AccordionBody>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                        <div className="me-2">
                                            <p className="mb-0">Allow search engines to index your name</p>
                                        </div>
                                        <FormCheck
                                            type="switch"
                                            id="searchEngineSwitch"
                                            checked={searchEngine}
                                            onChange={() => setSearchEngine(!searchEngine)}
                                        />
                                    </li>
                                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                        <div className="me-2">
                                            <p className="mb-0">Allow adult content in your feed</p>
                                        </div>
                                        <FormCheck
                                            type="switch"
                                            id="adultContentSwitch"
                                            checked={adultContent}
                                            onChange={() => setAdultContent(!adultContent)}
                                        />
                                    </li>
                                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                        <div className="me-2">
                                            <p className="mb-0">Allow your profile to be discovered by email</p>
                                        </div>
                                        <FormCheck
                                            type="switch"
                                            id="discoverByEmailSwitch"
                                            checked={discoverByEmail}
                                            onChange={() => setDiscoverByEmail(!discoverByEmail)}
                                        />
                                    </li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem eventKey="1" className="bg-transparent">
                            <AccordionHeader>
                                <span className="h6 mb-0">Who can send you messages?</span>
                            </AccordionHeader>
                            <AccordionBody>
                                <FormCheck
                                    type="radio"
                                    label="Anyone on Q&A"
                                    name="messageOption"
                                    id="ComRadio5"
                                    checked={messageOption === 'option1'}
                                    onChange={() => setMessageOption('option1')}
                                />
                                <FormCheck
                                    type="radio"
                                    label="People I follow and admins and moderators of Spaces I follow"
                                    name="messageOption"
                                    id="ComRadio2"
                                    checked={messageOption === 'option2'}
                                    onChange={() => setMessageOption('option2')}
                                />
                                <FormCheck
                                    type="radio"
                                    label="No one"
                                    name="messageOption"
                                    id="ComRadio3"
                                    checked={messageOption === 'option3'}
                                    onChange={() => setMessageOption('option3')}
                                />
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem eventKey="2" className="bg-transparent">
                            <AccordionHeader>
                                <span className="h6 mb-0">Comment Preferences and Translation Preferences</span>
                            </AccordionHeader>
                            <AccordionBody>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                        <div className="me-2">
                                            <p className="mb-0">Allow people to comment on your answers and posts</p>
                                        </div>
                                        <FormCheck
                                            type="switch"
                                            id="allowCommentSwitch"
                                            checked={allowComment}
                                            onChange={() => setAllowComment(!allowComment)}
                                        />
                                    </li>
                                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                        <div className="me-2">
                                            <p className="mb-0">Allow people to translate your answers into other languages</p>
                                        </div>
                                        <FormCheck
                                            type="switch"
                                            id="allowTranslateSwitch"
                                            checked={allowTranslate}
                                            onChange={() => setAllowTranslate(!allowTranslate)}
                                        />
                                    </li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        {/* ContentPreferences */}
                        <AccordionItem eventKey="3" className="bg-transparent">
                            <AccordionHeader>
                                <span className="h6 mb-0">Content Preferences</span>
                            </AccordionHeader>
                            <AccordionBody>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                        <div className="me-2">
                                            <p className="mb-0">Allow GIFs to play automatically</p>
                                        </div>
                                        <FormCheck
                                            type="switch"
                                            id="allowGifsSwitch"
                                            checked={allowGifs}
                                            onChange={() => setAllowGifs(!allowGifs)}
                                        />
                                    </li>
                                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                        <div className="me-2">
                                            <p className="mb-0">Allow advertisers on Q&A to promote your answers</p>
                                        </div>
                                        <FormCheck
                                            type="switch"
                                            id="allowPromoteSwitch"
                                            checked={allowPromote}
                                            onChange={() => setAllowPromote(!allowPromote)}
                                        />
                                    </li>
                                    <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                        <div className="me-2">
                                            <p className="mb-0">Notify your subscribers of your new questions</p>
                                        </div>
                                        <FormCheck
                                            type="switch"
                                            id="notifySubscribersSwitch"
                                            checked={notifySubscribers}
                                            onChange={() => setNotifySubscribers(!notifySubscribers)}
                                        />
                                    </li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
                <div className="card-footer pt-0 p-4 text-end border-0">
                    <Button type="submit" size="sm" variant="primary" className="mb-0">Save changes</Button>
                </div>
            </Card>
        </>
    )
}

export default Privacy