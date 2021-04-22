import React, { useState } from "react";
import { Card, Dropdown, DropdownButton, Form, InputGroup, FormControl, Button } from "react-bootstrap";

const styles = [
  {
    name: "Aldridge",
    minDrawerHeight: 160,
    minDrawerWidth: 230,
    minDoorWidth: 230,
  },
  {
    name: "Ashford",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 198,
  },
  {
    name: "Broadway",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 230,
  },
  {
    name: "Cambridge",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 275,
  },
  {
    name: "Canterbury",
    minDrawerHeight: 132,
    minDrawerWidth: 230,
    minDoorWidth: 260,
  },
  {
    name: "Elland",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 200,
  },
  {
    name: "Euroline",
    minDrawerHeight: 108,
    minDrawerWidth: 108,
    minDoorWidth: 108,
  },
  {
    name: "Gothic",
    minDrawerHeight: 100,
    minDrawerWidth: 160,
    minDoorWidth: 220,
  },
  {
    name: "Integra",
    minDrawerHeight: 60,
    minDrawerWidth: 240,
    minDoorWidth: 240,
  },
  {
    name: "Knebworth",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 100,
  },
  {
    name: "Lazio",
    minDrawerHeight: 120,
    minDrawerWidth: 240,
    minDoorWidth: 240,
  },
  {
    name: "Lincoln",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 100,
  },
  {
    name: "Milano",
    minDrawerHeight: 140,
    minDrawerWidth: 218,
    minDoorWidth: 218,
  },
  {
    name: "Newport",
    minDrawerHeight: 100,
    minDrawerWidth: 240,
    minDoorWidth: 240,
  },
  {
    name: "Oxford",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 290,
  },
  {
    name: "Palermo",
    minDrawerHeight: 132,
    minDrawerWidth: 230,
    minDoorWidth: 246,
  },
  {
    name: "Pisa",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 100,
  },
  {
    name: "Richmond",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 210,
  },
  {
    name: "Segreto",
    minDrawerHeight: 90,
    minDrawerWidth: 250,
    minDoorWidth: 250,
  },
  {
    name: "Shaker",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 220,
  },
  {
    name: "Surrey",
    minDrawerHeight: 100,
    minDrawerWidth: 242,
    minDoorWidth: 242,
  },
  {
    name: "Tullymore",
    minDrawerHeight: 100,
    minDrawerWidth: 100,
    minDoorWidth: 240,
  },
  {
    name: "Tuscany",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 250,
  },
  {
    name: "Venice",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 100,
  },
  {
    name: "Verona",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 246,
  },
  {
    name: "Warwick",
    minDrawerHeight: 100,
    minDrawerWidth: 260,
    minDoorWidth: 260,
  },
  {
    name: "Westbury",
    minDrawerHeight: 60,
    minDrawerWidth: 100,
    minDoorWidth: 240,
  },
];

const heights = [
  115,
  140,
  175,
  215,
  283,
  355,
  415,
  450,
  490,
  535,
  570,
  650,
  715,
  895,
  900,
  1055,
  1060,
  1245,
  1375,
  1435,
  1450,
  1495,
  1735,
  2155,
  2250,
  2400,
  2540,
];

const widths = [146, 296, 396, 446, 496, 596, 796, 896, 996, 1200];

const prices = [
  // height 115
  { height: 115, width: 396, price: 7.73 },
  { height: 115, width: 496, price: 8.16 },
  { height: 115, width: 596, price: 8.69 },
  // height 140
  { height: 140, width: 296, price: 7.43 },
  { height: 140, width: 396, price: 8.1 },
  { height: 140, width: 446, price: 8.42 },
  { height: 140, width: 496, price: 8.73 },
  { height: 140, width: 596, price: 9.41 },
  { height: 140, width: 796, price: 11.76 },
  { height: 140, width: 896, price: 12.77 },
  { height: 140, width: 996, price: 13.9 },
  // height 175
  { height: 175, width: 396, price: 8.73 },
  { height: 175, width: 496, price: 9.57 },
  { height: 175, width: 596, price: 10.36 },
  { height: 175, width: 796, price: 13.74 },
  { height: 175, width: 996, price: 15.38 },
  // height 215
  { height: 215, width: 396, price: 9.49 },
  { height: 215, width: 496, price: 10.49 },
  { height: 215, width: 596, price: 11.5 },
  { height: 215, width: 796, price: 15.26 },
  { height: 215, width: 996, price: 17.26 },
  // height 283
  { height: 283, width: 496, price: 17.48 },
  { height: 283, width: 596, price: 18.76 },
  { height: 283, width: 796, price: 20.25 },
  { height: 283, width: 896, price: 20.66 },
  { height: 283, width: 996, price: 21.57 },
  // height 335
  { height: 335, width: 496, price: 19.17 },
  { height: 335, width: 596, price: 20.82 },
  { height: 335, width: 796, price: 23.04 },
  { height: 335, width: 896, price: 24.78 },
  { height: 335, width: 996, price: 26.75 },
  // height 415
  { height: 415, width: 396, price: 18.69 },
  { height: 415, width: 446, price: 19.68 },
  { height: 415, width: 496, price: 20.62 },
  { height: 415, width: 596, price: 22.59 },
  // height 450
  { height: 450, width: 596, price: 23.65 },
  // height 490
  { height: 490, width: 596, price: 24.0 },
  // height 535
  { height: 535, width: 396, price: 20.25 },
  { height: 535, width: 496, price: 22.66 },
  // height 570
  { height: 570, width: 296, price: 18.33 },
  { height: 570, width: 396, price: 20.91 },
  { height: 570, width: 446, price: 22.19 },
  { height: 570, width: 496, price: 23.55 },
  { height: 570, width: 596, price: 26.05 },
  // height 650
  { height: 650, width: 296, price: 18.71 },
  { height: 650, width: 396, price: 21.53 },
  { height: 650, width: 446, price: 22.91 },
  { height: 650, width: 496, price: 24.33 },
  { height: 650, width: 596, price: 27.16 },
  // height 715
  { height: 715, width: 146, price: 13.5 },
  { height: 715, width: 296, price: 20.36 },
  { height: 715, width: 396, price: 21.7 },
  { height: 715, width: 446, price: 23.18 },
  { height: 715, width: 496, price: 24.67 },
  { height: 715, width: 596, price: 27.63 },
  { height: 715, width: 796, price: 37.21 },
  { height: 715, width: 996, price: 46.59 },
  { height: 715, width: 1200, price: 56.13 },
  // height 895
  { height: 895, width: 296, price: 27.42 },
  { height: 895, width: 396, price: 29.91 },
  { height: 895, width: 446, price: 32.53 },
  { height: 895, width: 496, price: 34.13 },
  { height: 895, width: 596, price: 38.3 },
  // height 900
  { height: 900, width: 296, price: 27.42 },
  { height: 900, width: 396, price: 29.91 },
  { height: 900, width: 446, price: 32.53 },
  { height: 900, width: 496, price: 34.13 },
  { height: 900, width: 596, price: 38.3 },
  { height: 900, width: 796, price: 46.86 },
  { height: 900, width: 996, price: 58.64 },
  { height: 900, width: 1200, price: 70.66 },
  // height 1055
  { height: 1055, width: 396, price: 34.41 },
  { height: 1055, width: 446, price: 36.89 },
  { height: 1055, width: 496, price: 39.37 },
  { height: 1055, width: 596, price: 44.29 },
  // height 1060
  { height: 1060, width: 396, price: 34.41 },
  { height: 1060, width: 446, price: 36.89 },
  { height: 1060, width: 496, price: 39.37 },
  { height: 1060, width: 596, price: 44.29 },
  // height 1245
  { height: 1245, width: 296, price: 37.72 },
  { height: 1245, width: 396, price: 41.86 },
  { height: 1245, width: 496, price: 45.85 },
  { height: 1245, width: 596, price: 51.49 },
  { height: 1245, width: 796, price: 64.83 },
  { height: 1245, width: 996, price: 81.11 },
  { height: 1245, width: 1200, price: 97.75 },
  // height 1375
  { height: 1375, width: 396, price: 45.82 },
  { height: 1375, width: 496, price: 50.87 },
  // height 1435
  { height: 1435, width: 396, price: 47.01 },
  { height: 1435, width: 496, price: 52.33 },
  { height: 1435, width: 796, price: 74.73 },
  { height: 1435, width: 996, price: 93.49 },
  { height: 1435, width: 1200, price: 112.66 },
  // height 1450
  { height: 1450, width: 396, price: 47.3 },
  { height: 1450, width: 496, price: 52.67 },
  // height 1495
  { height: 1495, width: 396, price: 48.22 },
  { height: 1495, width: 496, price: 53.52 },
  { height: 1495, width: 596, price: 58.28 },
  { height: 1495, width: 796, price: 77.85 },
  { height: 1495, width: 996, price: 97.41 },
  { height: 1495, width: 1200, price: 117.37 },
  // height 1735
  { height: 1735, width: 296, price: 45.0 },
  { height: 1735, width: 396, price: 53.17 },
  { height: 1735, width: 446, price: 57.23 },
  { height: 1735, width: 496, price: 61.28 },
  { height: 1735, width: 596, price: 64.09 },
  { height: 1735, width: 796, price: 90.35 },
  { height: 1735, width: 996, price: 113.04 },
  { height: 1735, width: 1200, price: 136.21 },
  // height 2155
  { height: 2155, width: 296, price: 50.54 },
  { height: 2155, width: 396, price: 59.86 },
  { height: 2155, width: 446, price: 64.54 },
  { height: 2155, width: 496, price: 69.21 },
  { height: 2155, width: 596, price: 73.42 },
  { height: 2155, width: 796, price: 112.21 },
  { height: 2155, width: 996, price: 140.42 },
  { height: 2155, width: 1200, price: 169.17 },
  // height 2250
  { height: 2250, width: 296, price: 51.76 },
  { height: 2250, width: 396, price: 61.51 },
  { height: 2250, width: 446, price: 66.38 },
  { height: 2250, width: 496, price: 71.24 },
  { height: 2250, width: 596, price: 81.0 },
  // height 2400
  { height: 2400, width: 296, price: 58.18 },
  { height: 2400, width: 396, price: 69.41 },
  { height: 2400, width: 446, price: 75.05 },
  { height: 2400, width: 496, price: 80.68 },
  { height: 2400, width: 596, price: 91.94 },
  // height 2540
  { height: 2540, width: 296, price: 61.56 },
  { height: 2540, width: 396, price: 73.47 },
  { height: 2540, width: 446, price: 79.47 },
  { height: 2540, width: 496, price: 85.4 },
  { height: 2540, width: 596, price: 97.3 },
  { height: 2540, width: 796, price: 129.95 },
  { height: 2540, width: 996, price: 162.62 },
  { height: 2540, width: 1200, price: 199.95 },
];

const PriceCalculator = ({ style }) => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [needsCustomSize, setNeedsCustomSize] = useState(false)
  const [needsHingeDrilling, setNeedsHingeDrilling] = useState(false)
  const [extraHingeHoles, setNeedsExtraHingeHoles] = useState(false)
  const [sideHingeHoles, setSideHingeHoles] = useState('Left Hand Door')

  const isStandard = (value, array) => {
    for (let i = 0; i < array.length; i++) {
      if (value == array[i]) {
        console.log(true)
        return true
      }
    }
    console.log(false)
    return false
  }

  const findNextSizeUp = (value, array) => {
    for (let i = 0; i < array.length; i++) {
      if (value < array[i]) {
        return array[i]
      }
    }
  }

  const findPrice = (height, width, array) => {
    for (let i = 0; i < array.length; i++) {
      if (height == array[i].height && width == array[i].width) {
        return array[i]
      }
    }
  }

  const findStyle = (style, styles) => {
    for (let i = 0; i < styles.length; i++) {
      if (style === styles[i].name) {
        return styles[i];
      }
    }
  };

  const customerStyle = findStyle(style, styles);

  if (style.length === 0) {
    return <div></div>;
  }

  return (
    <Card>
      <Card.Header>
        <h1>
          <b>Choose your door size:</b>
        </h1>
      </Card.Header>
      <Card.Body>
        <form>
          <div style={{ display: 'flex' }}>
            <div style={{ margin: "10px" }}>
              <DropdownButton title={height === 0 ? 'Height' : `${height}mm`} onSelect={e => setHeight(e)} disabled={needsCustomSize}>
                {heights.map((height, idx) => {
                  return (
                    <Dropdown.Item key={idx} eventKey={height}>{height}mm</Dropdown.Item>
                  )
                })}
              </DropdownButton>
            </div>
            <div style={{ margin: "10px" }}>
              <DropdownButton title={width === 0 ? 'Width' : `${width}mm`} onSelect={e => setWidth(e)} disabled={needsCustomSize}>
                {widths.map((width, idx) => {
                  return (
                    <Dropdown.Item key={idx} eventKey={width}>{width}mm</Dropdown.Item>
                  )
                })}
              </DropdownButton>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Do you need custom sizes?" checked={needsCustomSize} onChange={e => setNeedsCustomSize(!needsCustomSize)} />
            </Form.Group>
          </div>
          {needsCustomSize ? (<div style={{ margin: "10px" }}>
            <InputGroup>
              <FormControl
                placeholder="Height"
                aria-label="Height"
                aria-describedby="basic-addon2"
                type="number"
                onChange={e => { setHeight(e.target.value); isStandard(e.target.value, heights) }}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">mm</InputGroup.Text>
              </InputGroup.Append>
              <FormControl
                placeholder="Width"
                aria-label="Width"
                aria-describedby="basic-addon2"
                type="number"
                onChange={e => setWidth(e.target.value)}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">mm</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>) : null}
          <div style={{ margin: "10px" }}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Do you need hinge drilling?" checked={needsHingeDrilling} onChange={e => setNeedsHingeDrilling(!needsHingeDrilling)} />
            </Form.Group>
            {needsHingeDrilling ? (
              <>
                <DropdownButton title={sideHingeHoles} onSelect={e => setSideHingeHoles(e)}>
                  <Dropdown.Item eventKey="Left Hand Door">Left Hand Door</Dropdown.Item>
                  <Dropdown.Item eventKey="Right Hand Door">Right Hand Door</Dropdown.Item>
                  <Dropdown.Item eventKey="Top Hung Door">Top Hung Door</Dropdown.Item>
                </DropdownButton>
                <br />
                <InputGroup>
                  <FormControl
                    placeholder="Top Hole"
                    aria-label="Top Hole"
                    aria-describedby="basic-addon2"
                    type="number"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">mm</InputGroup.Text>
                  </InputGroup.Append>
                  <FormControl
                    placeholder="Bottom Hole"
                    aria-label="Bottom Hole"
                    aria-describedby="basic-addon2"
                    type="number"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">mm</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <br />
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Add Extra Hinge Holes" checked={extraHingeHoles} onChange={e => setNeedsExtraHingeHoles(!extraHingeHoles)} />
                </Form.Group>
                {extraHingeHoles ? (
                  <InputGroup>
                    <FormControl
                      placeholder="Extra Hole"
                      aria-label="Extra Hole"
                      aria-describedby="basic-addon2"
                      type="number"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">mm</InputGroup.Text>
                    </InputGroup.Append>
                    <DropdownButton title="From" style={{ marginLeft: '10px' }}>
                      <Dropdown.Item eventKey="Top">Top</Dropdown.Item>
                      <Dropdown.Item eventKey="Bottom">Bottom</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                ) : null}
              </>
            ) : null}
            <hr />
            <InputGroup>
              <FormControl
                placeholder="Quantity"
                aria-label="Quantity"
                aria-describedby="basic-addon2"
                type="number"
              />
            </InputGroup>
            <hr />
            <p>Price: £33.50</p>
            <Button type="submit">Add To Cart</Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default PriceCalculator;
