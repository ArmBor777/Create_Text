import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classes from "./creatText.module.scss";
import { useState } from 'react';


function CreatText() {

    const [show, setShow] = useState(false);
    const [bloks, setBloks] = useState([]);
    const [text, setText] = useState("");

    function handleInputChange(event) {
        setText(event.target.value)
    }

    function addBlok(newBlok) {
        setBloks([...bloks, newBlok])
    }

    function addNewBlok(event) {

        event.preventDefault()

        if (text.length > 0) {
            const newBlok = {
                id: Math.random(),
                text: text
            }

            setShow(true);

            addBlok(newBlok);

            setText("")
        }
    }

    function deleteBlok(id) {
        setBloks(bloks.filter((blok) => id !== blok.id))
    }

    return (
        <div className={classes.cont}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Text"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={text}
                />
                <Stack spacing={2} direction="row">
                    <Button
                        variant="contained"
                        onClick={addNewBlok}
                    >
                        Creat
                    </Button>
                </Stack>
            </Box>
            {
                show
                    ?
                    bloks.map((blok) => {
                        return (
                            <div>
                                <p>{blok.text}</p>
                                <Stack spacing={2} direction="row">
                                    <Button
                                        variant="outlined"
                                        onClick={() => { deleteBlok(blok.id) }}
                                    >
                                        x
                                    </Button>
                                </Stack>
                            </div>
                        )

                    })

                    :
                    null
            }
        </div>
    )
}

export default CreatText