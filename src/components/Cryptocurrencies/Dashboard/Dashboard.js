import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import * as cryptodashboard from '../../../data/Cryptodashboard/cryptodashboard';
import { Line, Doughnut } from 'react-chartjs-2';
import { Col, Table, Row, Card, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TRADINGACTIVITIES = [
{
id: 1,
icon: 'btc',
name: 'Bitcoin ',
title: 'BTC',
price: 'USD 680,175.06',
change: '+13%',
changeStatus: 'success',
date: '21/09/2021',
status: 'success',
statusText: 'delivery'
},
{
id: 2,
icon: 'eth',
name: 'Ethereum ',
title: 'ETH',
price: 'USD 345,235.02',
change: '-13%',
changeStatus: 'danger',
date: '22/09/2021',

status: 'danger',
statusText: 'Cancel'
},
{
id: 3,
icon: 'xrp',
name: 'Ripple ',
title: 'XRP',
price: 'USD 235,356.12',
change: '-2.23%',
changeStatus: 'warning',
date: '23/09/2021',

status: 'warning',
statusText: 'Hold'
},
{
id: 4,
icon: 'ltc',
name: 'Litecoin',
title: 'LTC',
price: 'USD 456,235.52',
change: '-1.13%',
changeStatus: 'danger',
date: '24/09/2021',

status: 'danger',
statusText: 'Cancel'
}
];

function CryptoDashboard() {
function info() {
}
info();
return (
<Fragment>
{/* <!-- Page Header --> */}
<div className="page-header">
<div>
<h2 className="main-content-title tx-24 mg-b-5">Welcome To Dashboard</h2>
<Breadcrumb>
<BreadcrumbItem href="#">Crypto Currencies</BreadcrumbItem>
<li className="breadcrumb-item active" aria-current="page">
Dashboard
</li>
</Breadcrumb>
</div>
<div className="d-flex">
<div className="justify-content-center">
<button type="button" className="btn btn-white btn-icon-text my-2 me-2">
<i className="fe fe-download me-2" /> Import
</button>
<button type="button" className="btn btn-white btn-icon-text my-2 me-2">
<i className="fe fe-filter me-2" /> Filter
</button>
<button type="button" className="btn btn-primary my-2 btn-icon-text">
<i className="fe fe-download-cloud me-2" /> Download Report
</button>
</div>
</div>
</div>
{/* <!-- End Page Header --> */}
<div className="row row-sm">
<div className="owl-carousel">
<cryptodashboard.Cryptocoursel />
</div>
</div>
{/* <!-- row opened --> */}
<Row className=" row-sm">
<Col
md={12}
sm={12}
lg={12}
xl={12}
xxl={4}
className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-4"
>
<Card className="custom-card overflow-hidden">
<Card.Header className="card-header border-bottom-0">
<label className="main-content-label my-auto pt-2 mb-1">Assets Allocation</label>
<span className="d-block tx-12 mb-0 mt-1 text-muted">
Asset allocation involves dividing an investment portfolio among different asset
categories
</span>
</Card.Header>
<Card.Body className="card-body crypto-wallet mx-auto">
<div>
<ReactApexChart
options={cryptodashboard.Cryptodashboard.options}
series={cryptodashboard.Cryptodashboard.series}
type="donut"
height={250}
/>
</div>
<div>
<div className="chart-circle-value circle-style">
<div className="tx-20 font-weight-bold">55%</div>
</div>
</div>
</Card.Body>

<div className="border-0">
<Table responsive className=" border-0 mg-b-0 text-nowrap text-md-nowrap">
<tbody>
<tr>
<td className="d-flex">
<div className="cryp-icon bg-primary my-auto me-2">
<i className="cf cf-btc" />
</div>
<div className="media-body ms-3">
<p className="mb-1 text-muted font-weight-normal tx-15">Bitcoin BTC</p>
<span className="tx-15 font-weight-semibold my-auto">$10,245.00</span>
</div>
</td>
<td className="">0.0215637249</td>
<td>
+12.85%
<i className="fa fa-arrow-up text-success ms-1"> </i>
</td>
</tr>
<tr>
<td className="d-flex">
<div className="cryp-icon bg-primary my-auto me-2">
<i className="cf cf-btc" />
</div>
<div className="media-body ms-3">
<p className="mb-1 text-muted font-weight-normal tx-15">Ethereum ETH</p>
<span className="tx-15 font-weight-semibold my-auto">$10,245.00</span>
</div>
</td>
<td className="">0.0253737689</td>
<td>
-02.25%
<i className="fa fa-arrow-down text-danger ms-1"> </i>
</td>
</tr>
<tr>
<td className="d-flex">
<div className="cryp-icon bg-primary my-auto me-2">
<i className="cf cf-btc" />
</div>
<div className="media-body ms-3">
<p className="mb-1 text-muted font-weight-normal tx-15">Dash DASH</p>
<span className="tx-15 font-weight-semibold my-auto">$10,245.00</span>
</div>
</td>
<td>0.0253546426</td>
<td>
-11.85%
<i className="fa fa-arrow-down text-danger ms-1"> </i>
</td>
</tr>
</tbody>
</Table>
</div>
</Card>
</Col>
<div className="col-xl-12 col-xxl-8 col-lg-12 col-md-12">
<div className="card card-bitcoin custom-card">
<div className="card-header border-bottom-0">
<label className="main-content-label my-auto pt-2 tx-15-f">BTC/USD</label>
<span className="d-block tx-12 mb-0 mt-1 text-muted">
Bitcoin is a digital cryptocurrency made up of processed data blocks used for online and
brick-and-mortar purchases.
</span>
</div>
<div className="card-body">
{/* <div id="btc_chart"></div> */}
<ReactApexChart
options={cryptodashboard.ApexChart.options}
series={cryptodashboard.ApexChart.series}
type="candlestick"
height={350}
/>
</div>
<div className="media px-4 pb-4 pt-1 bitcoin-market">
<div className="media-icon bg-primary crypto-icon me-2">
<i className="cf cf-btc tx-20" />
</div>
<div className="media-body ms-2">
<div className="row row-sm">
<div className="col">
<label>Symbol</label>
<p>BTC</p>
</div>
<div className="col-3">
<label>Price Benchmark</label>
<p>135.00%</p>
</div>
<div className="col">
<label>Price (USD)</label>
<p>$2,457.69</p>
</div>
<div className="col">
<label>Change (24H)</label>
<p>-0.32%</p>
</div>
<div className="col">
<label>Market Cap</label>
<p>$134.17B</p>
</div>
</div>
{/* <!-- row --> */}
</div>
</div>
</div>
</div>
</Row>
{/* <!-- row closed --> */}

{/* <!-- row opened --> */}
<div className="row row-sm">
<div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-8">
<div className="row row-sm">
<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
<div className="card custom-card">
<div className="card-body row py-0">
<div className="col-sm-4 d-flex no-block align-items-center">
<div>
<span className="tx-18 mb-3">Bitcoin</span>
<h2 className="mb-2 mt-2">3.634528</h2>
<span className="m-0 tx-15 mt-4 text-muted">$2500 USD</span>
</div>
</div>
<div className="col-sm-8">
<div className="chart-wrapper mt-4 ms-2 me-2">
<Line options={cryptodashboard.Cryptochart3} data={cryptodashboard.cryptochart3} />
</div>
</div>
</div>
</div>
</div>
<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
<div className="card custom-card">
<div className="card-body pt-0">
<br />
<br />
<span className="tx-18 mb-3">Your Profile</span>
<div className="row mt-3">
<div className="col-sm-6 my-auto border-end text-centerd-flex no-block align-items-center">
<div className="d-flex wh-50">
<Doughnut data={cryptodashboard.cryptochart4} options={{ maintainAspectRatio: false }} />
<div className="my-auto d-block ms-3">
<h6 className="mb-2 tx-16">2.343434</h6>
<span className="m-0 tx-13 text-muted">$2500 USD</span>
</div>
</div>
</div>
<div className="col-sm-6 my-auto text-sm-center">
<h2 className="mb-2  mt-3 mt-sm-0">2.343434</h2>
<span className="m-0 tx-14 mt-3 text-muted">Pending Balance</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="card custom-card">
<div className="card-header border-bottom-0">
<label className="main-content-label my-auto pt-2">TRADING ACTIVITIES</label>
<span className="d-block tx-12 mb-3 mt-1 text-muted">
Cryptocurrency trading is the act of speculating on cryptocurrency price movements via a
CFD trading account, or buying and selling the underlying coins via an exchange
</span>
</div>
<div className="card-body pt-2 pb-0">
<div className="table-responsive tasks">
<Table className="table card-table table-vcenter text-nowrap border" borderless>
<thead>
<tr>
<th className="wd-lg-10p text-center">#</th>
<th className="wd-lg-10p text-center">Name</th>
<th className="wd-lg-20p text-center">Price</th>
<th className="wd-lg-20p text-center">Change</th>
<th className="wd-lg-20p text-center">Date</th>
<th className="wd-lg-20p text-center">Status</th>
</tr>
</thead>
<tbody>
{TRADINGACTIVITIES.map((list, index) => (
<tr key={index} data-index={index}>
<td className="text-center">{list.id}</td>
<td className="coin_icon
d-flex">
<div className="cryp-icon bg-primary me-2">
<i className={`cf cf-${list.icon} text-center`} />
</div>
<span className=" my-auto text-center">
{list.name} <b>{list.title}</b>
</span>
</td>
<td className="text-center">{list.price}</td>
<td className="text-center">
<span className={`text-${list.changeStatus} `}>{list.change}</span>
</td>
<td className="text-center">{list.date}</td>
<td className="text-center">
<Link to="#" className={`text-${list.status}`}>
{list.statusText}
</Link>
</td>
</tr>
))}
</tbody>
</Table>
</div>
</div>
</div>
</div>
<Col md={12} sm={12} lg={12} xl={12} xxl={4}>
<Card className=" custom-card overflow-hidden">
<Card.Header className=" border-bottom-0">
<label className="main-content-label my-auto pt-2">Activity</label>
<span className="d-block tx-12 mb-4 mt-1 text-muted">
Activity is one of the many blockchain consensus algorithms
</span>
</Card.Header>
<ul className="crypto-transcation list-unstyled mg-b-0 px-0">
<li className="list-item mb-0 px-3 mt-0 pb-3">
<div className="media align-items-center">
<div className="crypto-icon bg-primary-transparent text-primary">
<i className="cf cf-btc wd-20 ht-20 text-center tx-18" />
</div>
<div className="media-body ms-3">
<p className="tx-medium mg-b-3 tx-15">Sent Litecoin</p>
<p className="tx-11 mg-b-0 tx-gray-500">To bitcoin Address</p>
</div>
</div>
<div className="text-end ms-auto my-auto">
<h5 className="font-weight-semibold tx-16 mb-0">
+ 0.0147
<i className="text-success tx-16 fe fe-arrow-up ms-1" />
</h5>
</div>
</li>
<li className="list-item mb-0 px-3 pb-3">
<div className="media align-items-center">
<div className="crypto-icon bg-primary-transparent text-primary">
<i className="cf cf-ltc wd-20 ht-20 text-center tx-18" />
</div>
<div className="media-body ms-3">
<p className="tx-medium mg-b-3 tx-15">Sent Ethereum</p>
<p className="tx-11 mg-b-0 tx-gray-500">Pending</p>
</div>
</div>
<div className="text-end ms-auto my-auto">
<h5 className="font-weight-semibold tx-16 mb-0">
- 0.0345
<i className="text-danger tx-16 fe fe-arrow-down ms-1" />
</h5>
</div>
</li>
<li className="list-item mb-0 px-3 pb-3">
<div className="media align-items-center">
<div className="crypto-icon bg-primary-transparent text-primary">
<i className="cf cf-dash wd-20 ht-20 text-center tx-18" />
</div>
<div className="media-body ms-3">
<p className="tx-medium mg-b-3 tx-15">Received Dash</p>
<p className="tx-11 mg-b-0 tx-gray-500">To Received Address</p>
</div>
</div>
<div className="text-end ms-auto my-auto">
<h5 className="font-weight-semibold tx-16 mb-0">
- 0.0346
<i className="text-danger tx-16 fe fe-arrow-down" />
</h5>
</div>
</li>
<li className="list-item px-3 pb-3">
<div className="media align-items-center">
<div className="crypto-icon bg-primary-transparent text-primary">
<i className="cf cf-xrp wd-20 ht-20 text-center tx-18" />
</div>
<div className="media-body ms-3">
<p className="tx-medium mg-b-3 tx-15">Received Ripple</p>
<p className="tx-11 mg-b-0 tx-gray-500">To Received Address</p>
</div>
</div>
<div className="text-end ms-auto my-auto">
<h5 className="font-weight-semibold tx-16 mb-0">
+ 0.0237
<i className="text-success tx-16 fe fe-arrow-up ms-1" />
</h5>
</div>
</li>
<li className="list-item px-3 pb-3">
<div className="media align-items-center">
<div className="crypto-icon bg-primary-transparent text-primary">
<i className="cf cf-bsd wd-20 ht-20 text-center tx-18" />
</div>
<div className="media-body ms-3">
<p className="tx-medium mg-b-3 tx-15">Received Ripple</p>
<p className="tx-11 mg-b-0 tx-gray-500">To Received Address</p>
</div>
</div>
<div className="text-end ms-auto my-auto">
<h5 className="font-weight-semibold tx-16 mb-0">
- 0.0348
<i className="text-danger tx-16 fe fe-arrow-down ms-1" />
</h5>
</div>
</li>
</ul>
</Card>
</Col>
</div>
</Fragment>
);
}

CryptoDashboard.propTypes = {};

CryptoDashboard.defaultProps = {};

export default CryptoDashboard;
