import React from 'react'

const sections = [
    {
        title: 'Questions And Answers',
        items: [
            {
                id: 'newAnswers',
                label: 'New Answers',
                desc: 'Email me when there are new answers to questions I asked or follow.',
            },
            {
                id: 'newAnswerRequests',
                label: 'New Answer Requests',
                desc: 'Email me when someone requests me to answer a question.',
            },
        ],
    },
    {
        title: 'Activity On Your Content',
        items: [
            {
                id: 'upvotes',
                label: 'Upvotes',
                desc: 'Email me when someone upvotes my content.',
            },
            {
                id: 'shares',
                label: 'Shares',
                desc: 'Email me when someone shares any of my content.',
            },
            {
                id: 'moderation',
                label: 'Moderation',
                desc: 'Email me when moderation actions are taken on my answers.',
            },
        ],
    },
    {
        title: 'Additional Settings',
        items: [
            {
                id: 'messages',
                label: 'Messages',
                desc: 'Email me when someone sends me a message.',
            },
            {
                id: 'comments',
                label: 'Comments',
                desc: 'Email me when someone comment on my content.',
            },
            {
                id: 'replies',
                label: 'Replies',
                desc: 'Email me when someone reply on my comment.',
            },
            {
                id: 'mentions',
                label: 'Mentions',
                desc: 'Email me when someone mentions me.',
            },
            {
                id: 'space',
                label: 'Space',
                desc: 'Email me when someone invites me or accepts my invitation to a Space.',
            },
            {
                id: 'pushNotifications',
                label: 'Browser Push Notifications',
                desc: 'Send me push notifications through my browser.',
            },
        ],
    },
]

const EmailNotification = () => {
    return (
        <>
            <div className="card p-0">
                <div className="card-header border-bottom p-4">
                    <h4 className="card-title">Email & Notification</h4>
                    <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Unaffected at ye of compliment alteration to.</p>
                </div>

                <div className="card-body p-4">
                    {sections.map((section, index) => (
                        <ul key={index} className="list-group mb-4">
                            <li className="list-group-item">
                                <h5 className="mb-0">{section.title}</h5>
                            </li>
                            {section.items.map((item) => (
                                <li key={item.id} className="list-group-item d-md-flex justify-content-between align-items-center">
                                    <div className="me-md-3">
                                        <h6 className="mb-0">{item.label}</h6>
                                        <p className="small mb-0">{item.desc}</p>
                                    </div>
                                    <div className="form-check form-switch mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id={item.id}
                                            defaultChecked
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                <div className="card-footer pt-0 p-4 text-end border-0">
                    <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                </div>
            </div>
        </>
    )
}

export default EmailNotification
