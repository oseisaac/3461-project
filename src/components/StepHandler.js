import React, { useEffect, useState } from 'react';
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Input from './Input';



const StepHandler = ({ step, onStepChange }) => {
    const classes = useStyles();


    const [state, setstate] = useState({})
    const [errors, setErrors] = useState({})


    const handleNext = (val) => {
        if (val >= 1) {
            if (val === 1) {
                if (state?.postalcode === undefined || state?.postalcode?.trim() === "") {
                    setErrors({ postalcode: { message: "Field Is Required" } })
                    return
                }
                if (state?.dob === undefined || state?.dob?.trim() === "") {
                    setErrors({ dob: { message: "Field Is Required" } })
                    return
                }
                if (state?.healthcard === undefined || state?.healthcard?.trim() === "") {
                    setErrors({ healthcard: { message: "Field Is Required" } })
                    return
                }
                if (state?.dose === undefined || state?.dose?.trim() === "") {
                    setErrors({ dose: { message: "Field Is Required" } })
                    return
                }
                onStepChange(1)
            }
            if (val === 2) {
                if (state?.phone === undefined || state?.phone?.trim() === "") {
                    setErrors({ phone: { message: "Field Is Required" } })
                    return
                }
                onStepChange(1)
            }
        } else {
            onStepChange(val)

        }
    }
    const handleChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <Container className={classes.root}>
            {
                step === 1 ? (
                    <>

                        <StepOne
                            state={state}
                            errors={errors}
                            handleNext={handleNext}
                            onChange={handleChange}

                        />
                    </>
                ) : step === 2 ? (
                    <>
                        <StepTwo
                            state={state}
                            errors={errors}
                            handleNext={handleNext}
                            onChange={handleChange}
                        />
                    </>
                ) : step === 3 && (
                    <>
                        <StepThree
                            state={state}
                            errors={errors}
                            handleNext={handleNext}
                            onChange={handleChange}
                        />
                    </>
                )
            }
        </Container>
    );
}

export default StepHandler;

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '80px auto',
        // background: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '500px',

        "& >*": {
            margin: '15px 0 ',
        },
        "& .btnWrapper": {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            "& .btn": {
                background: '#3071b4',
                margin: '10px',
                minWidth: '150px',

                "& .MuiButton-label": {
                    color: '#fff',
                }
            },
        },
        "& .appt-list": {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#00000012',
            border: 'solid 1px #0000003d',
            borderRadius: '10px',
            padding: '25px  30px',
            // boxShadow: '1px 1px 15px 0 #00000024',
            // background: 'linear-gradient(166deg, rgba(49,114,181,1) 0%, rgba(49,114,181,0.6166841736694677) 41%, rgba(0,0,0,0) 118%, rgba(0,0,0,0) 100%)',
        },
        "& .appt": {
            display: 'flex',
            flexDirection: 'row',
            border: 'solid 1px #0000003d',
            margin: '10px 0',
            borderRadius: '10px',
            padding: '10px',
            alignItems: 'center',
            backgroundColor: '#fff',
            cursor: 'pointer',
            justifyContent: 'space-between',
            minHeight: '100px',

            "&:hover": {
                backgroundColor: '#ffffffcf',
                transition: "all ease 0.2s ease",
            },
            "& .left": {
                color: '#000',
                flex: '0.6',
                textAlign: 'left',
                textTransform: 'capitalize',
            },
            "& .right": {
                flex: '0.4',
                color: '#000',
                textAlign: 'left',
                textTransform: 'capitalize',
            },
            "& span": {
                color: '#3071b4',
            },

            "&.active-appt": {
                backgroundColor: '#7474747d',
            },
            "& .MuiTouchRipple-root span": {
                backgroundColor: '#ffffffcf!important',
                opacity: .3,
            },
        },
        "& .step3Wrapper": {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'left',
            textTransform: 'capitalize',
            color: '#000',
            backgroundColor: '#00000012',
            padding: '20px',
            maxWidth: '700px',
            width: '100%',

            "& .left": {
                flex: '0.5',
            },
            "& .right": {
                flex: '0.5',

                "& > div ": {
                    margin: '10px auto',
                },
            },
        },

    },
    "& .step3Wrapper": {


    },
}));

const StepOne = ({ state, onChange, errors, handleNext }) => {

    return (
        <>
            <Input
                id="postalcode"
                label="What is your location"
                placeholder="En ter Postal Code or City"
                name="postalcode"
                value={state?.postalcode || ""}
                error={Boolean(errors?.postalcode)}
                autoFocus={Boolean(errors?.postalcode)}
                helperText={(errors?.postalcode?.message)}
                onChange={onChange}

            />
            <Input
                label="Date of birth "
                placeholder="Month / Day / Year"
                name="dob"
                id="date"
                type="date"
                value={state?.dob || ""}
                error={Boolean(errors?.dob)}
                autoFocus={Boolean(errors?.dob)}
                helperText={(errors?.dob?.message)}
                onChange={onChange}
            />
            <Input
                label="Health Card Number"
                placeholder="xxxxx - xxx - xxx - xx"
                name="healthcard"
                id="healthcard"
                value={state?.healthcard || ""}
                error={Boolean(errors?.healthcard)}
                autoFocus={Boolean(errors?.healthcard)}
                helperText={(errors?.healthcard?.message)}
                onChange={onChange}
            />
            <FormControl component="fieldset" required>
                <FormLabel component="legend">Would you like to book both First and Second Dose or Second Dose  Only ?</FormLabel>
                <RadioGroup aria-label="dose" name="dose" value={`${state?.dose}`}
                    onChange={onChange}

                >
                    <FormControlLabel value="1" control={<Radio />} label="First and Second Dose Appointment" />
                    <FormControlLabel value="2" control={<Radio />} label="Second Dose Appointment Only" />
                </RadioGroup>
            </FormControl>
            <div className="btnWrapper">
                <Button className="btn" onClick={() => handleNext(1)}>Continue</Button>
            </div>


        </>
    );

}
const StepTwo = ({ state, onChange, errors, handleNext }) => {
    const [check, setcheck] = useState(state?.appointment ? true : false)
    const [results, setresults] = useState([])
    console.log(state)

    const handleDate = () => {
        if (state?.pdate) {
            const res = avaiableAppointments.filter(appt => new Date(appt.date.replaceAll("-", ",")) > new Date(state.pdate.replaceAll("-", ",")))
            setresults(res)
            setcheck(true)
        }
    }

    useEffect(() => {
        handleDate()
    }, [])


    return (
        <>
            <Input
                id="phone"
                label="Phone Number"
                placeholder="xxx-xxx-xxxx"
                name="phone"
                value={state?.phone || ""}
                error={Boolean(errors?.phone)}
                autoFocus={Boolean(errors?.phone)}
                helperText={(errors?.phone?.message)}
                onChange={onChange}

            />
            <Input
                id="email"
                label="Email"
                required={false}
                placeholder="tester@gmail.com"
                name="email"
                value={state?.email || ""}
                error={Boolean(errors?.email)}
                helperText={(errors?.email?.message)}
                onChange={onChange}

            />
            <Input
                label="Preferred Date "
                placeholder="Month / Day / Year"
                name="pdate"
                id="pdate"
                type="date"
                value={state?.pdate || ""}
                error={Boolean(errors?.pdate)}
                helperText={(errors?.pdate?.message)}
                onChange={(e) => {
                    onChange(e)
                    setcheck(false)
                }}
            />
            <div className="btnWrapper">
                <Button className="btn" disabled={check} onClick={handleDate}>View Available Dates</Button>
            </div>
            {
                check && (
                    <div className="appt-list">
                        {
                            results.map((slot, index) => {
                                console.log(slot.id, state?.appointment, slot.id === state?.appointment)
                                return (
                                    <Button className={`appt ${slot.id === state?.appointment ? 'active-appt' : ''}`} key={index}
                                        onClick={() => onChange(
                                            { target: { name: 'appointment', value: slot.id } }
                                        )}
                                    >
                                        <div className="left">
                                            {slot.address}
                                        </div>
                                        <div className="right">
                                            <p>{slot.date}{slot.time}</p>
                                            <span>{slot.type}</span>
                                        </div>
                                    </Button>
                                )
                            })
                        }
                    </div>
                )
            }
            <div className="btnWrapper">
                <Button className="btn" onClick={() => handleNext(-1)}>Back</Button>
                {
                    state?.appointment && (<Button className="btn" onClick={() => handleNext(2)}>Continue</Button>)
                }
            </div>
        </>
    );
}
const StepThree = ({ state, onChange, errors, handleNext }) => {

    return (
        <div className="step3Wrapper">
            <div className="left">
                <h5>appointment Confirmed</h5>
                <p>{avaiableAppointments.find(appt => appt.id === state?.appointment)?.address}</p>
            </div>
            <div className="right">
                <div>
                    <p><strong>Phone</strong> {state?.phone}</p>
                    <p><strong>Email</strong> {state?.email}</p>
                    <p><strong>OHIP</strong> {state?.healthcard}</p>
                    <p><strong>Date</strong> {state?.date}, {state?.time}</p>
                </div>
                <div>
                    <strong>Vaccine Type</strong>
                    <p>{avaiableAppointments.find(appt => appt.id === state?.appointment)?.type}</p>
                </div>
            </div>
        </div>
    );
}





const avaiableAppointments = [
    {
        id: '1',
        date: "2021-08-16",
        time: '3:00pm',
        address: '21 Queensway West Mississauga, ON L5B 1B6',
        type: 'Moderna (age 18 or older)',
    },
    {
        id: '2',
        date: "2021-09-31",
        time: '3:00pm',
        address: '21 Queensway West Mississauga, ON L5B 1B6',
        type: 'Pfizer',
    },
    {
        id: '3',
        date: "2021-09-08",
        time: '12:00pm',
        address: '21 Queensway West Mississauga, ON L5B 1B6',
        type: 'Moderna',
    },
]