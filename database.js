const express =require('express')
var app=express()
var mysql=require('mysql')
var bodyParser=require('body-parser')
app.use(bodyParser.json({type:'application/json'}))
app.use(bodyParser.urlencoded({ extended: false }))

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'heltho'
})
var server= app.listen(3000,function(){
    console.log('starteddd')

})



connection.connect(function(err){
    if(err){
        console.log(err)

    }
    else{
        console.log('connected')
    }
})


app.get('/fetchinfo/:email',function(req,res){
    console.log(req.params.email)
    console.log('hiiiiii')

    connection.query(`SELECT * from User where USERS='${req.params.email}'`,function(error,rows,feilds){
        if(error){
            console.log(error)
        }
        else{
            console.log(rows)
            res.send(rows)
        }
    })
})

app.post('/',function(req,res)
{
    let name=req.body.user
    console.log(req.body.user)

    connection.query(`INSERT INTO User (USERS)  SELECT * from (select '${req.body.user}' ) as tmp WHERE NOT EXISTS (SELECT USERS FROM User WHERE USERS='${req.body.user}')`,function(err,rows,feilds){
            if(!!err)
            {
                console.log(err)

            }
            else{
                console.log('inserted')
                res.send(rows)

            }
        }
    )

    connection.query(`create table if not exists ${req.body.user}(Weight int,height int,age int,bmi float)`,function(err,rows,fields){
        if(!!err){
            console.log(err)
        }
        else{
            console.log('created')
        }
    })





})

app.get('/profileinfo/:id',function(req,res,){
console.log(req.params.id)
    console.log('id wLA')
    connection.query(`SELECT * from profileinfo where email='${req.params.id}' `,function (error, rows, feilds) {
        if (error) {
            console.log(error)
        } else {
            console.log(rows)


            res.send(rows)
        }
    })












})

app.post('/profileinfo',function(req,res) {
        connection.query(`insert into profileinfo (photo,name,email)  SELECT * from ( select  '${req.body.photo}','${req.body.name}','${req.body.user}')as tmp WHERE NOT EXISTS (SELECT email FROM profileinfo WHERE email='${req.body.user}')`, function (err, rows, fields) {
                if (!!err) {
                    console.log(err)
                } else {
                    console.log(req.body.user)
                    console.log('inserted in profile')

                }


            }
        )


    }
)




app.post('/delete/:id',function(req,res,rows){
    console.log(req.params)
    connection.query(`DELETE FROM USER WHERE id= ${req.params.id}`,function(err,result){

        console.log('deleted')

        res.send(rows)

    })
})