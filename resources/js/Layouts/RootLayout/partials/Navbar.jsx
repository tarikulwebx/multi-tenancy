import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import styles from "@/styles";
import { Link } from "@inertiajs/react";
import React from "react";

const Navbar = ({ user }) => {
    return (
        <header className="bg-white shadow py-4 sticky top-0">
            <div className={styles.containerLarge}>
                <div className="flex items-center justify-between">
                    <Brand />
                    <NavMenu />
                    {user ? (
                        <ProfileDropdown user={user} />
                    ) : (
                        <LoginRegisterButtons />
                    )}
                </div>
            </div>
        </header>
    );
};

const Brand = () => {
    return (
        <Link
            href={route("home")}
            className="font-bold text-2xl text-primary-500"
        >
            Tenancy
        </Link>
    );
};

const NavMenu = () => {
    return (
        <nav>
            <ul className="flex items-center gap-4">
                <li>
                    <NavLink>Home</NavLink>
                </li>
                <li>
                    <NavLink>About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

const ProfileDropdown = ({ user }) => {
    return (
        <div className="hidden sm:flex sm:items-center sm:ms-6">
            <div className="ms-3 relative">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                {user.name}

                                <svg
                                    className="ms-2 -me-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route("profile.edit")}>
                            Profile
                        </Dropdown.Link>
                        <Dropdown.Link href={route("tenant.index")}>
                            Tenants
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
};

const LoginRegisterButtons = () => {
    return (
        <div className="flex items-center gap-3">
            <Link href={route("register")}>
                <SecondaryButton>Register</SecondaryButton>
            </Link>

            <Link href={route("login")}>
                <PrimaryButton>Login</PrimaryButton>
            </Link>
        </div>
    );
};

export default Navbar;
