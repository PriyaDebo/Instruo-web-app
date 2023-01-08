import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from "axios"

import { useStateContext } from "../../Contexts/ContextProvider"
import HeroSection from "../Shared/HeroSection"
import logo from "../../assets/logo-static.svg"
import Loader from "../Shared/Loader"

const LogIn = () => {
	return (
		<div>
			<HeroSection
				title={"Login"}
				desc={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
				}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Login",
						url: "",
					},
				]}
			/>

			<div className="flex flex-col items-center p-5">
				<div className="my-8 flex gap-4 justify-center">
					<img src={logo} className="inline" width="10%" />
					<p className="text-9xl font-bold">Instruo 2k23</p>
				</div>
				<div className="w-2/3 shadow-2xl bg-base-100 border-4 rounded-xl border-base-200">
					<div className="card-body">
						<Formik
							initialValues={{
								email: "",
								password: "",
							}}
							validate={(values) => {
								const errors = {}
								if (!values.email) errors.email = "Required"

								if (values.password.trim() === "")
									errors.password = "Password cannot be empty"
								return errors
							}}
							onSubmit={async (
								values,
								{ setSubmitting, resetForm }
							) => {
								try {
									const { data } = await axios.post(
										"/api/v1/users/login",
										values
									)
									const { data: setting } = await axios.post(
										"/api/v1/settings/get-setting",
										{ userid: values.email }
									)
									localStorage.setItem(
										"user",
										JSON.stringify({
											...data.user,
											password: "",
										})
									)
									localStorage.setItem(
										"setting",
										JSON.stringify(setting)
									)
									setLoginUser({ ...data.user, password: "" })
									setUserSetting(setting)
									setSubmitting(false)
									if (setting.budget === 0) {
										showToastHandler(
											"Please set budget & categories",
											"warning"
										)
										navigate("/settings")
									} else {
										showToastHandler(
											"Login successful",
											"success"
										)
										navigate("/")
									}
								} catch (error) {
									showToastHandler("Login failed", "error")
									console.log(error)
									resetForm()
									setSubmitting(false)
								}
							}}>
							{({ isSubmitting }) => (
								<Form>
									<div className="form-control">
										<label
											className="label"
											htmlFor="email">
											Email
										</label>
										<Field
											id="email"
											type="email"
											name="email"
											className="input input-bordered"
										/>
										<ErrorMessage
											name="email"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>
									<div className="form-control">
										<label className="label">
											Password
										</label>
										<Field
											id="password"
											type="password"
											name="password"
											className="input input-bordered"
										/>
										<ErrorMessage
											name="password"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="mt-6 mb-2">
										<Link to="/signup" className="link">
											First time user? Click here to
											register
										</Link>
									</div>

									<div className="form-control mt-6 w-40 mx-auto">
										{!isSubmitting ? (
											<button
												type="submit"
												className="btn btn-primary">
												Login
											</button>
										) : (
											<Loader />
										)}
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogIn
