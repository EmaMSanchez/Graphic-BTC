"use client"
import { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart } from 'lucide-react';
import { useRouter } from "next/navigation"

export default function Home() {
  const [selectedBot, setSelectedBot] = useState('all');
  const [leverage, setLeverage] = useState(1);
  const router = useRouter();
  const botsData = {
    'Beta_-1.5_2':  [
    -5.350625958273589,
    4.072892037887835,
    4.19209066864805,
    4.2121912914492565,
    -4.037313321427829,
    -3.9565107154714774,
    4.109123028869976,
    4.1221521257128,
    -4.0123006556736325,
    -3.9552278356313018,
    -3.9808166641057094,
    -4.371610312494947,
    4.187627873050889,
    4.074689987682384,
    -4.061971786729392,
    4.079137075501997,
    -3.942715039441072,
    -4.11112806456604,
    5.020869829446285,
    4.13373930221349,
    4.084754463652064,
    4.187826735373182,
    4.146123829312188,
    -3.9973097851669657,
    -3.993743475056086,
    -3.9596655515378396,
    4.133960830447605,
    4.111322657185077,
    4.10607651756373,
    -4.038678056928032,
    4.119187762174526,
    -4.021917155784421,
    4.134781167094935,
    -4.004081246364078,
    4.121943889120075,
    4.7019819647845535,
    4.065002223699783,
    4.072369660426305,
    4.064287754694865,
    4.082563514158056,
    4.080904225909222,
    -4.003544966262084,
    4.373482559612676,
    4.108923353465979,
    4.1010973850652634,
    4.075181501109679,
    4.093707588877943,
    4.082881860106535,
    -4.001571325308048,
    -4.151971063797617,
    -4.2168842497317724,
    -4.240708568041034,
    4.211417789215964,
    -4.0382998522601055,
    4.338736886436957,
    -4.405522743520813,
    -4.08965844241554,
    4.213554853022837,
    -4.071670686294943,
    -3.9497830449400295,
    4.314870158209326,
    4.204647875385289,
    4.092225766522764,
    4.165928961004892,
    4.124866883958389,
    -4.071535453084975,
    -4.222580081979724,
    4.526492960572143,
    4.120948030001715,
    4.094192557342437,
    -4.1159795635979215,
    4.058769862919371,
    -4.064096310849444,
    -3.9443371133923106,
    4.089534873516907,
    -4.177601253512568,
    -3.9490940496734863,
    4.299559787711572,
    -3.948509181413501,
    4.194684790152917,
    4.119663766896945,
    -4.122165316731054,
    4.165657213380612,
    -4.031115410031033,
    -4.163788295122343,
    -3.944718491967144,
    4.121920142795962,
    -3.996640706814119,
    4.065927253226474,
    4.062283584919269,
    -4.038902244461731,
    -3.9925214033546403,
    -3.9576397584804885,
    4.35281096136923
  ],
    'Hybrid-1A': [-4.4642331593973275,4.0276598903672705,3.9057553784275223,3.997718267000443,-4.146110970957961,-4.145675466686001,3.887115859584473,3.9074228683099648,-4.479688145072035,-4.157539676296043,-4.2158441957294785,-4.371610312494947,3.8987212068642654,3.8671978336005983,-4.214515879841009,-4.213527176871997,-4.421564168213023,3.9209617102390304,3.943569671653793,3.913655594279308,3.9328186127868836,-4.192955312317491,3.9055592667639956,-4.221657179600808,-4.157700089283191,-4.139930183808872,3.871954177407186,3.8708461412997046,3.9077480569887135,-4.181053988827686,3.8784322418494255,-4.208437001669002,3.8756903232060607,-4.20104809410969,4.121943889120075,4.057822372451886,3.8729727878797493,3.8669047963328076,3.9015696894070415,3.8608610362245663,4.003613946173349,-4.185710456707194,4.373482559612676,3.987955930428667,3.940658901236022,3.8714839604650706,3.867353961902794,3.9290371707454916,-4.2813503660887875,-4.151971063797617,-4.2168842497317724,-4.240708568041034,3.925013466186982,-4.153292966988937,3.870079935807696,-4.405522743520813,-4.415347285175396,3.8647802368976856,-4.274566831121571,-4.183716658348757,4.0243306885932295,3.988779729921511,3.862404429950443,3.8766434527992715,3.8898601797640304,-4.1927670766092175,-4.222580081979724,3.939162814975269,4.120948030001715,3.870418456850988,-4.1734428356239235,3.893907303367356,-4.174829247250408,-4.178336971699076,3.8691271344996987,-4.163514501365519,-4.2895243846359286,3.958719023875494,3.8799481198189705,3.8683646880210185,-4.286753169145357,3.9013318456200747,3.899446973782686,-4.417407619854457,3.9866408539392735,-4.201686116594985,-4.163788295122343,-4.633146521693309,3.957387993332344,-4.201880469857024,3.9676111322513368,-4.156625003907218,3.9653497653767404,-4.138012439799731,-4.240401678864225,3.9192440655407186],
    'Hybrid2': [-2.01, 2.00, 2.10, 2.16, -2.05, 2.17, -2.00, 2.04, 2.00, -2.21, 2.07, 2.06, 2.02, 2.12, -2.07, 2.21, 2.01, -2.05, -2.16, 2.01, -2.00, 2.07, -2.12, 2.15, -2.04, -2.16, -2.05, 2.13, 2.04, 2.05, -2.05, 2.12, -2.06, -2.04, 2.05, -2.03, -2.01, -2.01, 2.12, 2.22, 2.29, -2.06, -2.02, 2.14, 2.09, 2.01, 2.14, 2.12, -2.06, 2.37, -2.10, -2.00, -2.04, 2.16, -2.06, -2.02, 2.04, 2.27, 2.28, -2.16, -2.00, 2.04, 2.01, -2.09, -2.04, 2.03, -2.02, 2.01, -2.06, 2.04, -2.09, 2.23, 2.44, -2.38, 2.21, 2.05, -2.00, -2.05, -2.00, 2.23, -2.03, -2.01, 2.03, -2.01, 2.02, -2.00, -2.02, 2.13, -2.02, -2.01, 2.06, -2.01, 2.08, 2.03, 2.05, -2.58, 2.01, 2.00, -2.01, 2.14, -2.04, 2.00, 2.26, -2.01, -2.02, 2.00, 2.03, 2.21, -2.01, 2.02, 2.09, -2.03, -2.02, -2.02, -2.09, -2.01, 2.01, -2.08, 2.02, 2.08, 2.18, 2.03, -2.10, 2.25, -2.06, -2.35, -2.08, 2.09, -2.01, 2.04, -2.06, 2.01, 2.02, -2.05, 2.06, -2.05, 2.00, 2.02, 2.33, 2.09, 2.73, -2.01, 2.08, -2.09, -2.01, -2.03, -2.02, -2.02, -2.11, 2.05, -2.06, 2.03, -2.06, 2.15, -2.02, 2.01, 2.07, 2.15, 2.04, 2.11, -2.03, 2.01, 2.06, 2.09, -2.06, 2.20, 2.08, -2.14, 2.34, 2.17, 2.01, -2.06, 2.11, 2.00, 2.72, -2.18, 2.06, -2.12, 2.22, -2.17, -2.12, 2.04, -2.28, -2.17, 2.05, 2.03, -2.25, -2.06, 2.21, 2.05, -2.14, -2.06, -2.08, -2.01, -2.10, 2.05, 2.04, -2.27, -2.84, -2.04, -2.13, -2.08, 2.24, -2.02, -2.00, 2.03, -2.07, -2.00, 2.04, 2.09, -2.10, 2.26, 2.36, -2.19, 2.06, -2.02, -2.02, 2.02, 2.18, 2.04, -2.04, 2.04, -2.03, -2.24, 2.49, -2.37, 2.06, -2.00, 2.31, 2.01, -2.05, -2.04, -2.00, -2.04, -2.06, -2.08, 2.27, 2.07, 3.52, 2.03, 2.03, -2.07, -2.07, 2.05, 2.46, 2.10, -2.01, -2.04, -2.03, -2.07, 2.02, -2.00, -2.02, -2.08, -2.05, 2.05, -2.00, -2.13, 2.04, -2.05, -2.05, 2.13, 2.01, 2.08, 2.16, 2.05, 2.09, -2.02, 2.15, -2.02, -2.05, -2.01, -2.00, 2.07, 2.04, -2.18, 2.11, 2.05, -2.01, -2.00, 2.29, 2.12, 2.58, 2.09, 2.02, -2.07, 2.13, 2.00, -2.01, -2.06, -2.01, 2.02, -2.01, 2.05, -2.08, 2.04, 2.03, -2.00, 2.13, 2.19, -2.01, -2.01, 2.00, -2.27, 2.04, -2.16, -2.01, 3.09, 2.17, -2.00, -2.05, -2.14, 2.04, 2.06, -2.21, 2.01, -2.02, -2.01]
  };

  const calculateReturns = (trades, leverageMultiplier = 1) => {
    const leveragedTrades = trades.map(t => t * leverageMultiplier);
    const linearReturn = leveragedTrades.reduce((sum, pct) => sum + pct, 0);
    const compoundReturn = leveragedTrades.reduce((acc, pct) => acc * (1 + pct / 100), 1);
    const compoundReturnPct = (compoundReturn - 1) * 100;
    const winningTrades = leveragedTrades.filter(t => t > 0);
    const losingTrades = leveragedTrades.filter(t => t < 0);
    const winRate = (winningTrades.length / leveragedTrades.length) * 100;
    const avgWin = winningTrades.reduce((sum, t) => sum + t, 0) / winningTrades.length;
    const avgLoss = losingTrades.reduce((sum, t) => sum + t, 0) / losingTrades.length;
    const largestWin = Math.max(...leveragedTrades);
    const largestLoss = Math.min(...leveragedTrades);
    
    let peak = 100;
    let maxDrawdown = 0;
    let currentCapital = 100000;
    
    leveragedTrades.forEach(pct => {
      currentCapital = currentCapital * (1 + pct / 100);
      if (currentCapital > peak) peak = currentCapital;
      const drawdown = ((peak - currentCapital) / peak) * 100;
      if (drawdown > maxDrawdown) maxDrawdown = drawdown;
    });
    
    return {
      linearReturn,
      compoundReturnPct,
      totalTrades: leveragedTrades.length,
      winningTrades: winningTrades.length,
      losingTrades: losingTrades.length,
      winRate,
      avgWin,
      avgLoss,
      profitFactor: Math.abs(avgWin * winningTrades.length) / Math.abs(avgLoss * losingTrades.length),
      largestWin,
      largestLoss,
      maxDrawdown,
      finalCapital: currentCapital
    };
  };

  const results = useMemo(() => ({
    'Beta_-1.5_2': calculateReturns(botsData['Beta_-1.5_2'], leverage),
    'Hybrid-1A': calculateReturns(botsData['Hybrid-1A'], leverage),
    'Hybrid2': calculateReturns(botsData['Hybrid2'], leverage)
  }), [leverage]);

  const getBotData = () => {
    if (selectedBot === 'all') {
      return Object.entries(results);
    }
    return [[selectedBot, results[selectedBot]]];
  };

  const getStatusColor = (value) => {
    if (value > 0) return 'text-green-600';
    if (value < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getStatusBg = (value) => {
    if (value > 0) return 'bg-green-50';
    if (value < 0) return 'bg-red-50';
    return 'bg-gray-50';
  };
 
   const irAGraphic = () => {
    router.push("/graficas");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Análisis Detallado de Bots de Trading</h1>
          <p className="text-slate-600">Comparación de rendimientos lineales vs compuestos con apalancamiento</p>
        </div>

        <div className="mb-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">⚡ Nivel de Apalancamiento</h3>
          <div className="flex gap-3 flex-wrap">
            {[1, 2, 3, 5, 10].map(lev => (
              <button
                key={lev}
                onClick={() => setLeverage(lev)}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  leverage === lev 
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105' 
                    : 'bg-slate-100 text-slate-700 hover:bg-purple-50'
                }`}
              >
                x{lev}
              </button>
            ))}
          </div>
          {leverage > 1 && (
            <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-sm text-red-700">
                <strong>⚠️ Advertencia:</strong> Con apalancamiento x{leverage}, cada ganancia y pérdida se multiplica por {leverage}. El riesgo aumenta exponencialmente.
              </p>
            </div>
          )}
        </div>

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setSelectedBot('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedBot === 'all' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-slate-700 hover:bg-blue-50'
            }`}
          >
            Ver Todos
          </button>
          {Object.keys(results).map(bot => (
            <button
              key={bot}
              onClick={() => setSelectedBot(bot)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedBot === bot 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-slate-700 hover:bg-blue-50'
              }`}
            >
              {bot}
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          {getBotData().map(([botName, data]) => (
            <div key={botName} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  {botName}
                  {leverage > 1 && (
                    <span className="ml-auto bg-purple-500 px-3 py-1 rounded-full text-sm font-semibold">
                      Apalancamiento x{leverage}
                    </span>
                  )}
                </h2>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className={`${getStatusBg(data.linearReturn)} rounded-lg p-6 border-2 border-slate-200`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-slate-600" />
                      <h3 className="font-semibold text-slate-700">Rendimiento Lineal</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Suma simple de todos los profitPct</p>
                    <div className={`text-4xl font-bold ${getStatusColor(data.linearReturn)}`}>
                      {data.linearReturn > 0 ? '+' : ''}{data.linearReturn.toFixed(2)}%
                    </div>
                  </div>

                  <div className={`${getStatusBg(data.compoundReturnPct)} rounded-lg p-6 border-2 border-slate-200`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="w-5 h-5 text-slate-600" />
                      <h3 className="font-semibold text-slate-700">Rendimiento Compuesto</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Multiplicación acumulativa (reinversión)</p>
                    <div className={`text-4xl font-bold ${getStatusColor(data.compoundReturnPct)}`}>
                      {data.compoundReturnPct > 0 ? '+' : ''}{data.compoundReturnPct.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    <PieChart className="w-5 h-5" />
                    Estadísticas Detalladas
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Total de Operaciones</p>
                      <p className="text-2xl font-bold text-slate-800">{data.totalTrades}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600">Win Rate</p>
                      <p className="text-2xl font-bold text-blue-600">{data.winRate.toFixed(1)}%</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {data.winningTrades}W / {data.losingTrades}L
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600">Profit Factor</p>
                      <p className={`text-2xl font-bold ${data.profitFactor > 1 ? 'text-green-600' : 'text-red-600'}`}>
                        {data.profitFactor.toFixed(2)}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600">Ganancia Promedio</p>
                      <p className="text-xl font-bold text-green-600">+{data.avgWin.toFixed(2)}%</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600">Pérdida Promedio</p>
                      <p className="text-xl font-bold text-red-600">{data.avgLoss.toFixed(2)}%</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600">Mejor / Peor Trade</p>
                      <p className="text-sm font-semibold">
                        <span className="text-green-600">+{data.largestWin.toFixed(2)}%</span>
                        <span className="text-slate-400 mx-1">/</span>
                        <span className="text-red-600">{data.largestLoss.toFixed(2)}%</span>
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600">Drawdown Máximo</p>
                      <p className="text-xl font-bold text-orange-600">{data.maxDrawdown.toFixed(2)}%</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600">Capital Final ($100 inicial)</p>
                      <p className={`text-xl font-bold ${data.finalCapital >= 100 ? 'text-green-600' : 'text-red-600'}`}>
                        ${data.finalCapital.toFixed(2)}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600">ROI Total</p>
                      <p className={`text-xl font-bold ${data.finalCapital >= 100 ? 'text-green-600' : 'text-red-600'}`}>
                        {((data.finalCapital - 100) / 100 * 100).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-sm text-slate-700">
                    <strong>Diferencia entre métodos:</strong> {Math.abs(data.compoundReturnPct - data.linearReturn).toFixed(2)}%
                    {data.compoundReturnPct > data.linearReturn ? ' (el compuesto es mayor)' : ' (el lineal es mayor)'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">📊 Resumen Comparativo {leverage > 1 ? `(x${leverage})` : ''}</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-3 text-slate-700">Bot</th>
                  <th className="text-right p-3 text-slate-700">Lineal</th>
                  <th className="text-right p-3 text-slate-700">Compuesto</th>
                  <th className="text-right p-3 text-slate-700">Capital Final</th>
                  <th className="text-right p-3 text-slate-700">Drawdown</th>
                  <th className="text-right p-3 text-slate-700">Win Rate</th>
                  <th className="text-right p-3 text-slate-700">Profit Factor</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(results).map(([botName, data]) => (
                  <tr key={botName} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 font-medium text-slate-800">{botName}</td>
                    <td className={`text-right p-3 font-bold ${getStatusColor(data.linearReturn)}`}>
                      {data.linearReturn > 0 ? '+' : ''}{data.linearReturn.toFixed(2)}%
                    </td>
                    <td className={`text-right p-3 font-bold ${getStatusColor(data.compoundReturnPct)}`}>
                      {data.compoundReturnPct > 0 ? '+' : ''}{data.compoundReturnPct.toFixed(2)}%
                    </td>
                    <td className={`text-right p-3 font-semibold ${data.finalCapital >= 100 ? 'text-green-600' : 'text-red-600'}`}>
                      ${data.finalCapital.toFixed(2)}
                    </td>
                    <td className="text-right p-3 text-orange-600 font-semibold">
                      {data.maxDrawdown.toFixed(2)}%
                    </td>
                    <td className="text-right p-3 text-slate-600">{data.winRate.toFixed(1)}%</td>
                    <td className={`text-right p-3 font-semibold ${data.profitFactor > 1 ? 'text-green-600' : 'text-red-600'}`}>
                      {data.profitFactor.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h4 className="font-bold text-yellow-800 mb-2">⚠️ Nota Importante</h4>
          <p className="text-sm text-yellow-700 mb-2">
            <strong>Rendimiento Lineal:</strong> Suma simple de porcentajes. Asume que cada trade se hace con el mismo capital fijo.
          </p>
          <p className="text-sm text-yellow-700">
            <strong>Rendimiento Compuesto:</strong> Multiplica los retornos. Asume que reinviertes las ganancias (o pierdes sobre capital acumulado). 
            Este es el método más realista en trading con capital variable.
          </p>
        </div>
         <button

                onClick={irAGraphic}
                className={`px-6 py-3 rounded-lg font-bold bg-purple-600 text-white shadow-lg  scale-100 mt-6 transition-all duration-300 hover:scale-110 justify-center mx-auto flex items-center gap-2` }
              >
                Grafica
              </button>
      </div>
    </div>
  );
};

