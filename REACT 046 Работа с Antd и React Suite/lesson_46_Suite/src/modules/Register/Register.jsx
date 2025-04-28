import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../layout/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import RegisterForm from "./RegisterForm/RegisterForm";

import { registerUser } from "../../shared/api/auth-api";

const Register = () => {

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submitForm = async payload => {
        const { error } = await registerUser(payload);
        if (error) {
            return setError(error.response.data.message);
        }
        navigate("/");
        // navigate("/login");
        // alert("Register successfully");
    };

    return (
        <section>
            <Container>
                <SectionTitle title="Регистрация" />
                <RegisterForm submitForm={submitForm} />
                {error && <LoadingError>{error}</LoadingError>}
            </Container>
        </section>
    )
};

export default Register;