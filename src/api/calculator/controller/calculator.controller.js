
export class CalculatorController{
    static adder(req, res){
        const {number1, number2} = req.body;
        res.json({result: number1+number2});
    }
}