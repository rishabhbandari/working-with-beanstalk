const express320 = require('express');
const app320 = express320();
const Joi320 = require('joi');
app320.use(express320.json());


app320.get('/', (req320, res320) => {
    res320.send(jobs320);
});


app320.get('/api/jobs320/:name/:part', (req320, res320) => {
    console.log(req320.params);
    const specificname320 =   jobs320.find( c => c.jobName320 === req320.params.name && c.partID320 === parseInt(req320.params.part));
    console.log(specificname320);
    if (!specificname320 ) res320.status(404).send('The job details could not be found due to invalid job name or part id');
    res320.send(specificname320);
});


app320.post('/api/jobs320', (req320, res320) => {
    const schema320 = {
        partID320: Joi320.number().required(),
        qty320: Joi320.number().required()
    };
    const result320 = Joi320.validate(req320.body, schema320);
    console.log(result320);
    if(result320.error)
    {
        res320.status(400).send(result320.error.details[0].message);
        return;
    }
    const addjob320 = { 
        jobName320: 'j'+(jobs320.length+1),
        partID320: req320.body.partID320,
        qty320: req320.body.qty320        
    };
    jobs320.push(addjob320);
    res320.send(addjob320);
});


app320.put('/api/jobs320/:name/:part', (req320, res320) => {
    const specificname320 =   jobs320.find( c => c.jobName320 === req320.params.name && c.partID320 === parseInt(req320.params.part));
    if (!specificname320 ) res320.status(404).send('The job details could not be found due to invalid job name or part id');    
        const schema320 = {
        partID320: Joi320.number().required(),
        qty320: Joi320.number().required()
    };
    const result320 = Joi320.validate(req320.body, schema320);
    if(result320.error)
    {
        res320.status(400).send(result320.error.details[0].message);
        return;
    } 
    specificname320.qty320 = req320.body.qty320;
    res320.send(specificname320);
});

const port = process.env.port || 3000;
app320.listen(3000, () => console.log('Listening on port 4000...'));
let jobs320 = [
    {jobName320: 'j1', partID320: 10, qty320: 1},
    {jobName320: 'j2', partID320: 20, qty320: 2},
    {jobName320: 'j3', partID320: 30, qty320: 3},
    {jobName320: 'j4', partID320: 40, qty320: 4},
];