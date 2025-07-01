'use client'
import React from 'react'
import Account from "../account/Account"
import Deactivate from "../account/Deactivate"
import Display from "../account/Display"
import EmailNotification from "../account/EmailNotification"
import Privacy from "../account/Privacy"

type SettingsProps = {
    activeTab: string
}

const Settings = ({ activeTab }: SettingsProps) => {
    return (
        <div className="tab-content py-0 mb-0">
            {activeTab === 'account' && <Account />}
            {activeTab === 'privacy' && <Privacy />}
            {activeTab === 'email' && <EmailNotification />}
            {activeTab === 'display' && <Display />}
            {activeTab === 'deactivate' && <Deactivate />}
        </div>
    )
}

export default Settings
