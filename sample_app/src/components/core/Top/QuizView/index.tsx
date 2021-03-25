import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, Typography, withStyles } from '@material-ui/core';
import '../../../../styles/TextInput.css';
import ProgressBar from './ProgressBar';

const classes = {
  root: {
    minWidth: 275,
  },
  bullet: {
    // display: 'flex',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class QuizView extends Component {
  private chart: am4charts.PieChart | undefined;
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.labels.template.disabled = true;
    chart.data = [{
      "country": "お好み焼き",
      "litres": 35
    }, {
      "country": "たこ焼き",
      "litres": 48
    }, {
      "country": "明石焼き",
      "litres": 5
    }, {
      "country": "もんじゃ焼き",
      "litres": 12
    }];
    chart.legend = new am4charts.Legend();

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
          </CardHeader>
          <CardContent>
            <Typography
              // className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h4">
              好きな粉ものはどれですか？
            </Typography>
            <Divider component="div" />
            <ProgressBar />
            <div id="chartdiv" style={{ width: "100%", height: "500px"}}></div>
            <Typography variant="body2" component="p">
            </Typography>
            <Divider component="p" />
          </CardContent>
          <CardActions>
            <FormControl>
              {/* グループにラベル */}
              <FormLabel>一位を当ててください</FormLabel>
              {/* ラジオグループ */}
              <RadioGroup>
                {/* リスト */}
                <Grid container justify="center">
                  <Grid xs={12} sm={6}>
                    <FormControlLabel
                      value="お好み焼き"
                      control={<Radio />}
                      label="お好み焼き"
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <FormControlLabel
                      value="たこ焼き"
                      control={<Radio />}
                      label="たこ焼き"
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <FormControlLabel
                      value="もんじゃ焼き"
                      control={<Radio />}
                      label="もんじゃ焼き"
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <FormControlLabel
                      value="明石焼き"
                      control={<Radio />}
                      label="明石焼き"
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
              <Button type="submit" variant="outlined" color="primary">
                Answer
              </Button>
            </FormControl>
          </CardActions>
        </Card>
      </React.Fragment >);
  }
}
export default withStyles(classes)(QuizView);
