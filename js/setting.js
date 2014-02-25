/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'kuroishi_city_budget';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* kuroishi cofog　color=使途一日あたりのアイコン色　bcolor=使途別予算額のアイコン色 */
 /*
1：議会費
2：総務費
3：民生費
4：衛生費
5：労働費
6：農林水産業費
7：商工費
8：土木費
9：消防費
10：教育費
11：災害復旧費
12：公債費
13：予備費
  */
  '1'	: { icon: 'icons/legislative.svg'					, color: '#FF6666', bcolor: '#FF6666' },
  '1.1'	: { icon: 'icons/legislative.svg'					, color: '#FF6666', bcolor: '#FF6666' },
  '2'	: { icon: 'icons/admin.svg'							, color: '#8A0808', bcolor: '#0AB971' },
  '2.1'	: { icon: 'icons/admin.svg'							, color: '#8A0808', bcolor: '#0AB971' },
  '3'	: { icon: 'icons/helping-others.svg'				, color: '#8A0808', bcolor: '#4E6D00' },
  '3.1'	: { icon: 'icons/helping-others.svg'				, color: '#8A0808', bcolor: '#4E6D00' },
  '4'	: { icon: 'icons/health.svg'						, color: '#8A0808', bcolor: '#339900' },
  '4.1'	: { icon: 'icons/health.svg'						, color: '#8A0808', bcolor: '#339900' },
  '5'	: { icon: 'icons/misc-services.svg'					, color: '#8A0808', bcolor: '#2A3A03' },
  '5.1'	: { icon: 'icons/misc-services.svg'					, color: '#8A0808', bcolor: '#2A3A03' },
  '6'	: { icon: 'icons/forest.svg'						, color: '#8A0808', bcolor: '#EC2406' },
  '6.1'	: { icon: 'icons/forest.svg'						, color: '#8A0808', bcolor: '#EC2406' },
  '7'	: { icon: 'icons/manufactoring-construction.svg'	, color: '#8A0808', bcolor: '#938626' },
  '7.1'	: { icon: 'icons/manufactoring-construction.svg'	, color: '#8A0808', bcolor: '#938626' },
  '8'	: { icon: 'icons/coal.svg'							, color: '#8A0808', bcolor: '#790586' },
  '8.1'	: { icon: 'icons/coal.svg'							, color: '#8A0808', bcolor: '#790586' },
  '9'	: { icon: 'icons/fire-brigade.svg'					, color: '#8A0808', bcolor: '#D33673' },
  '9.1'	: { icon: 'icons/fire-brigade.svg'					, color: '#8A0808', bcolor: '#D33673' },
  '10'	: { icon: 'icons/primary.svg'						, color: '#8A0808', bcolor: '#790586' },
  '10.1': { icon: 'icons/primary.svg'						, color: '#8A0808', bcolor: '#790586' },
  '11'	: { icon: 'icons/aid-developing-countries.svg'		, color: '#8A0808', bcolor: '#790586' },
  '11.1': { icon: 'icons/aid-developing-countries.svg'		, color: '#8A0808', bcolor: '#790586' },
  '12'	: { icon: 'icons/public-debt.svg'					, color: '#8A0808', bcolor: '#790586' },
  '12.1': { icon: 'icons/public-debt.svg'					, color: '#8A0808', bcolor: '#790586' },
  '13'	: { icon: 'icons/money.svg'							, color: '#8A0808', bcolor: '#790586' },
  '13.1': { icon: 'icons/money.svg'							, color: '#8A0808', bcolor: '#790586' }
};
