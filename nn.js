class ActivationFunction {
  constructor(func, dfunc) {
    this.func = func;
    this.dfunc = dfunc;
  }
}

let sigmoid = new ActivationFunction(
  x => 1 / (1 + Math.exp(-x)),
  y => y * (1 - y)
);

let tanh = new ActivationFunction(
  x => Math.tanh(x),
  y => 1 - (y * y)
);

class NeuralNetwork { 
  constructor(input_node, hidden_node, output_node) {
    this.input_node = input_node;
    this.hidden_node = hidden_node;
    this.output_node = output_node;
    this.learning_rate = learning_rate;

    //generate weights

    this.ih_weight = new Matrix(this.hidden_node, this.input_node);
    this.ho_weight = new Matrix(this.output_node, this.hidden_node);
    this.ih_weight.randomize();
    this.ho_weight.randomize();

    //generate biases
    // this.ih_bias = new Matrix(this.hidden_node, 1);
    // this.ho_bias = new Matrix(this.output_node, 1);
  }

  train(inputarr, targets) { 
    //feedforward network
    
  }
}