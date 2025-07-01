'use client';
import React, { useState, useRef } from 'react';

const CustomeTheme = () => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 200);
    };

    return (
        <ul className="nav align-items-center dropdown-hover ms-sm-2">
            <li
                className={`nav-item dropdown dropdown-animation ${open ? 'show' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    className="btn btn-link mb-0 px-2 lh-1"
                    id="bd-theme"
                    type="button"
                    aria-expanded={open}
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        className="bi bi-circle-half theme-icon-active fill-warning fa-fw"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                        <use href="#"></use>
                    </svg>
                </button>

                <ul
                    className={`dropdown-menu min-w-auto dropdown-menu-end ${open ? 'show' : ''}`}
                    aria-labelledby="bd-theme"
                    data-bs-popper={open ? 'static' : undefined}
                >
                    <li className="mb-1">
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
                            <svg
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                <use href="#"></use>
                            </svg>
                            Light
                        </button>
                    </li>
                    <li className="mb-1">
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162z" />
                                <use href="#"></use>
                            </svg>
                            Dark
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-circle-half fa-fw mode-switch me-1"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                                <use href="#"></use>
                            </svg>
                            Auto
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default CustomeTheme;
