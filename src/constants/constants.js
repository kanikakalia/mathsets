const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}
const constant = {
  getReq: {
    method: 'GET',
    headers: headers
  },
  postReq: {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  },
  OPRATIONS: [
    {
      name: 'Simplify',
      value: 'simplify'
    },
    {
      name: 'Factor',
      value: 'factor'
    },
    {
      name: 'Derive',
      value: 'derive'
    },
    {
      name: 'Integrate',
      value: 'integrate'
    },
    {
      name: 'Find 0’s',
      value: 'zeroes'
    },
    {
      name: 'Find Tangent',
      value: 'tangent'
    },
    {
      name: 'Area Under Curve',
      value: 'area'
    },
    {
      name: 'Cosine',
      value: 'cos'
    },
    {
      name: 'Sine',
      value: 'sin'
    },
    {
      name: 'Tangent',
      value: 'tan'
    },
    {
      name: 'Inverse Cosine',
      value: 'arccos'
    },
    {
      name: 'Inverse Sine',
      value: 'arcsin'
    },
    {
      name: 'Inverse Tangent',
      value: 'arctan'
    },
    {
      name: 'Absolute Value',
      value: 'abs'
    },
    {
      name: 'Logarithm',
      value: 'log'
    }
  ]
};

export default constant;
