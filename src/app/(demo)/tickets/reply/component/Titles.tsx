import React from 'react';
import { FaSlidersH } from 'react-icons/fa';

type TitlesProps = {
    onOpenChats: () => void;
    onOpenProfile: () => void;
};

const Titles = ({ onOpenChats, onOpenProfile }: TitlesProps) => {
    return (
        <div className="container d-sm-flex justify-content-between mb-4 pt-5 pt-xl-3">
            <div className="d-flex justify-content-between gap-2 align-items-center">
                <button className="btn btn-primary d-lg-none mb-0" onClick={onOpenChats}>
                    <FaSlidersH /> Chats
                </button>
                <button className="btn btn-primary d-xl-none mb-0" onClick={onOpenProfile}>
                    <FaSlidersH /> Profile
                </button>
            </div>
        </div>
    );
};

export default Titles;
