import Link from 'next/link'
import React from 'react'

const Deactivate = () => {
    return (
        <>
            <div className="card p-0">
                <div className="card-header border-bottom p-4">
                    <h4 className="card-title mb-0">Deactivate Account</h4>
                    <small>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</small>
                </div>
                <div className="card-body p-4">
                    <p>Before confirming that you would like your profile deleted, we'd like to take a moment to explain the implications of deletion:</p>
                    <ul>
                        <li>Deletion is irreversible, interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</li>
                        <li>If you delete your account, you will lose your all data.</li>
                    </ul>
                    <p> Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
                    <div className="form-check form-check-md my-4">
                        <input className="form-check-input" type="checkbox" value="" id="deleteaccountCheck" />
                        <label className="form-check-label" htmlFor="deleteaccountCheck">Yes, I'd like to delete my account</label>
                    </div>
                    <Link href="#" className="btn btn-success-soft btn-sm mb-2 mb-sm-0">Keep my account</Link>
                    <Link href="#" className="btn btn-danger btn-sm mb-0">Delete my account</Link>
                </div>
            </div>
        </>
    )
}

export default Deactivate