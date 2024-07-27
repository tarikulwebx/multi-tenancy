import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import RootLayout from "@/Layouts/RootLayout/RootLayout";
import styles from "@/styles";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const Create = ({ auth }) => {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        name: "",
        subdomain: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("tenant.store"), {
            onFinish: () => reset("name", "subdomain"),
        });
    };

    return (
        <RootLayout
            user={auth.user}
            header={<h1 className={styles.pageTitle}>Register Tenant</h1>}
        >
            <Head title="Register Tenant" />
            <div className="max-w-2xl">
                <div className={styles.card}>
                    <h4 className="font-semibold text-lg mb-1">
                        Tenant register form
                    </h4>
                    <p className="text-sm">Fill the required fields</p>

                    <form
                        onSubmit={submit}
                        className="mt-5 grid grid-cols-1 gap-4"
                    >
                        <div>
                            <InputLabel
                                htmlFor="name"
                                value="Tenant name"
                                className="mb-1"
                            />
                            <TextInput
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="subdomain"
                                value="Subdomain"
                                className="mb-1"
                            />
                            <div className="flex items-center gap-2">
                                <TextInput
                                    id="subdomain"
                                    name="subdomain"
                                    placeholder="Subdomain"
                                    className="w-full"
                                    value={data.subdomain}
                                    onChange={(e) =>
                                        setData("subdomain", e.target.value)
                                    }
                                />
                                <div>.localhost</div>
                            </div>
                            <InputError
                                message={errors.subdomain}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-2 items-center flex gap-3">
                            <PrimaryButton disabled={processing}>
                                Register
                            </PrimaryButton>
                            {recentlySuccessful && (
                                <div className="font-medium text-green-500">
                                    Registered.
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </RootLayout>
    );
};

export default Create;
