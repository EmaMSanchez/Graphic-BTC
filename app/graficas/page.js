"use client";
import { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'; // 👈 librería de gráficos
import { useRouter } from "next/navigation"

const TradingBotsAnalysis = () => {
  const [selectedBot, setSelectedBot] = useState('all');
  const [leverage, setLeverage] = useState(1);
  
  // 🔹 Aquí vos cargás tu objeto botsData con tus datos
  const botsData = {
    'Beta_-1.5_2': [-1.54, 2.03, 2.13, 2.02, -1.52, 2.02, 2.04, -1.54, 2.09, 2.00, -1.51, 2.07, -1.53, -1.56, 2.03, 2.02, 2.12, -1.60, 2.21, 2.01, -1.53, -1.55, -1.59, 2.03, -1.52, 2.15, -1.60, -1.52, 2.19, 2.04, 2.05, -1.58, 2.12, -1.51, -1.58, 2.05, -1.56, -1.55, -1.51, 2.12, 2.22, 2.29, -1.50, -1.89, -1.52, 2.14, 2.09, -1.53, 2.06, 2.10, 2.01, -1.75, 2.37, -1.67, -1.67, -1.62, -1.50, -1.50, -1.53, -1.57, 2.04, 2.27, 2.28, -1.52, -1.52, 2.25, 2.04, -1.66, -1.73, -1.54, 2.03, -1.76, 2.05, -1.51, -1.51, -1.59, 2.34, -1.61, 2.23, 2.44, -1.51, 2.21, 2.05, -1.69, -1.59, -1.55, -1.58, 2.23, -1.58, -1.51, 2.03, -1.57, 2.02, -1.54, -1.52, 2.04, -1.51, -1.52, 2.10, 2.04, -1.58, 2.08, -1.55, 2.05, -1.53, 2.05, -1.56, -1.51, 2.01, 2.00, -1.61, 2.14, -1.71, 2.03, 2.26, -1.67, -1.56, 2.00, 2.03, 2.21, -1.73, 2.02, 2.09, -1.50, -1.54, -1.51, -1.54, 2.04, 2.32, 2.02, -1.50, 2.10, 2.17, -1.51, -1.50, 2.05, -1.61, -1.56, -1.55, 2.05, -1.63, -2.01, 2.04, -1.79, 2.01, 2.02, -1.58, -1.57, -1.51, 2.23, 2.17, 2.00, 2.02, 2.33, 2.09, 2.73, -1.61, 2.08, -1.60, -1.51, -1.57, 2.06, -1.54, -1.53, -1.51, -1.51, 2.05, -1.55, 2.03, -1.54, 2.00, -1.53, 2.02, 2.06, 2.12, 2.05, -1.54, 2.09, -1.65, -1.60, 2.01, 2.06, 2.09, -1.70, -1.54, 2.20, -1.65, 2.09, 2.17, 2.34, 2.17, 2.01, -1.52, 2.11, 2.00, 2.72, -1.75, 2.06, -1.58, 2.22, -1.52, -1.55, 2.04, -1.60, -1.69, 2.05, 2.03, -1.62, -1.68, 2.21, -1.64, -1.63, -1.72, -1.56, -1.68, -1.52, -1.54, 2.10, -1.51, 2.04, -1.56, -2.00, -1.51, -1.53, -1.50, 2.24, -1.67, -1.51, 2.07, -1.53, -1.53, 2.01, 2.09, -1.52, -1.54, -1.69, -1.51, 2.17, 2.28, -1.58, 2.06, -1.58, -1.51, 2.01, 2.18, 2.04, -1.60, 2.04, -1.51, -1.77, 2.49, -1.53, 2.06, -1.76, 2.31, -1.52, 2.09, -1.51, -1.59, -1.55, -1.52, -1.50, -1.54, 2.16, 2.10, 2.09, 2.39, 2.03, -1.54, -1.51, -1.56, -1.60, 2.22, -1.52, 2.01, -1.51, -1.56, 2.05, 2.46, 2.10, -1.58, -1.51, -1.50, -1.59, -1.52, -1.51, 2.08, -1.52, -1.52, -1.50, -1.52, 2.05, -1.54, -1.59, 2.04, -1.59, -1.56, -1.50, -1.50, -1.52, 2.08, -1.51, -1.55, 2.08, 2.16, 2.05, 2.09, -1.55, 2.02, 2.06, -1.53, -1.52, -1.57, 2.06, -1.52, 2.18, -1.50, -1.52, 2.07, 2.04, -1.51, 2.11, 2.05, -1.51, -1.51, -1.51, -1.51, 2.29, 2.12, 2.58, 2.09, 2.02, -1.51, 2.13, 2.00, -1.66, -1.68, -1.55, -1.51, -1.50, 2.03, -1.52, 2.05, -1.50, 2.02, 2.00, -1.51, -1.55, -1.59, 2.04, 2.19, -1.60, -1.50, 2.05, -1.52, 2.04, -1.60, -1.89, 2.17, -1.57, 2.08, 2.03, -1.57, -1.53, -1.51, -1.62, -1.50, -1.50, 2.03, 2.01, -1.64, 2.01, -1.53, -1.51],
    'Hybrid-1A': [-4.4642331593973275,4.0276598903672705,3.9057553784275223,3.997718267000443,-4.146110970957961,-4.145675466686001,3.887115859584473,3.9074228683099648,-4.479688145072035,-4.157539676296043,-4.2158441957294785,-4.371610312494947,3.8987212068642654,3.8671978336005983,-4.214515879841009,-4.213527176871997,-4.421564168213023,3.9209617102390304,3.943569671653793,3.913655594279308,3.9328186127868836,-4.192955312317491,3.9055592667639956,-4.221657179600808,-4.157700089283191,-4.139930183808872,3.871954177407186,3.8708461412997046,3.9077480569887135,-4.181053988827686,3.8784322418494255,-4.208437001669002,3.8756903232060607,-4.20104809410969,4.121943889120075,4.057822372451886,3.8729727878797493,3.8669047963328076,3.9015696894070415,3.8608610362245663,4.003613946173349,-4.185710456707194,4.373482559612676,3.987955930428667,3.940658901236022,3.8714839604650706,3.867353961902794,3.9290371707454916,-4.2813503660887875,-4.151971063797617,-4.2168842497317724,-4.240708568041034,3.925013466186982,-4.153292966988937,3.870079935807696,-4.405522743520813,-4.415347285175396,3.8647802368976856,-4.274566831121571,-4.183716658348757,4.0243306885932295,3.988779729921511,3.862404429950443,3.8766434527992715,3.8898601797640304,-4.1927670766092175,-4.222580081979724,3.939162814975269,4.120948030001715,3.870418456850988,-4.1734428356239235,3.893907303367356,-4.174829247250408,-4.178336971699076,3.8691271344996987,-4.163514501365519,-4.2895243846359286,3.958719023875494,3.8799481198189705,3.8683646880210185,-4.286753169145357,3.9013318456200747,3.899446973782686,-4.417407619854457,3.9866408539392735,-4.201686116594985,-4.163788295122343,-4.633146521693309,3.957387993332344,-4.201880469857024,3.9676111322513368,-4.156625003907218,3.9653497653767404,-4.138012439799731,-4.240401678864225,3.9192440655407186],
    'Hybrid2': [-2.01, 2.00, 2.10, 2.16, -2.05, 2.17, -2.00, 2.04, 2.00, -2.21, 2.07, 2.06, 2.02, 2.12, -2.07, 2.21, 2.01, -2.05, -2.16, 2.01, -2.00, 2.07, -2.12, 2.15, -2.04, -2.16, -2.05, 2.13, 2.04, 2.05, -2.05, 2.12, -2.06, -2.04, 2.05, -2.03, -2.01, -2.01, 2.12, 2.22, 2.29, -2.06, -2.02, 2.14, 2.09, 2.01, 2.14, 2.12, -2.06, 2.37, -2.10, -2.00, -2.04, 2.16, -2.06, -2.02, 2.04, 2.27, 2.28, -2.16, -2.00, 2.04, 2.01, -2.09, -2.04, 2.03, -2.02, 2.01, -2.06, 2.04, -2.09, 2.23, 2.44, -2.38, 2.21, 2.05, -2.00, -2.05, -2.00, 2.23, -2.03, -2.01, 2.03, -2.01, 2.02, -2.00, -2.02, 2.13, -2.02, -2.01, 2.06, -2.01, 2.08, 2.03, 2.05, -2.58, 2.01, 2.00, -2.01, 2.14, -2.04, 2.00, 2.26, -2.01, -2.02, 2.00, 2.03, 2.21, -2.01, 2.02, 2.09, -2.03, -2.02, -2.02, -2.09, -2.01, 2.01, -2.08, 2.02, 2.08, 2.18, 2.03, -2.10, 2.25, -2.06, -2.35, -2.08, 2.09, -2.01, 2.04, -2.06, 2.01, 2.02, -2.05, 2.06, -2.05, 2.00, 2.02, 2.33, 2.09, 2.73, -2.01, 2.08, -2.09, -2.01, -2.03, -2.02, -2.02, -2.11, 2.05, -2.06, 2.03, -2.06, 2.15, -2.02, 2.01, 2.07, 2.15, 2.04, 2.11, -2.03, 2.01, 2.06, 2.09, -2.06, 2.20, 2.08, -2.14, 2.34, 2.17, 2.01, -2.06, 2.11, 2.00, 2.72, -2.18, 2.06, -2.12, 2.22, -2.17, -2.12, 2.04, -2.28, -2.17, 2.05, 2.03, -2.25, -2.06, 2.21, 2.05, -2.14, -2.06, -2.08, -2.01, -2.10, 2.05, 2.04, -2.27, -2.84, -2.04, -2.13, -2.08, 2.24, -2.02, -2.00, 2.03, -2.07, -2.00, 2.04, 2.09, -2.10, 2.26, 2.36, -2.19, 2.06, -2.02, -2.02, 2.02, 2.18, 2.04, -2.04, 2.04, -2.03, -2.24, 2.49, -2.37, 2.06, -2.00, 2.31, 2.01, -2.05, -2.04, -2.00, -2.04, -2.06, -2.08, 2.27, 2.07, 3.52, 2.03, 2.03, -2.07, -2.07, 2.05, 2.46, 2.10, -2.01, -2.04, -2.03, -2.07, 2.02, -2.00, -2.02, -2.08, -2.05, 2.05, -2.00, -2.13, 2.04, -2.05, -2.05, 2.13, 2.01, 2.08, 2.16, 2.05, 2.09, -2.02, 2.15, -2.02, -2.05, -2.01, -2.00, 2.07, 2.04, -2.18, 2.11, 2.05, -2.01, -2.00, 2.29, 2.12, 2.58, 2.09, 2.02, -2.07, 2.13, 2.00, -2.01, -2.06, -2.01, 2.02, -2.01, 2.05, -2.08, 2.04, 2.03, -2.00, 2.13, 2.19, -2.01, -2.01, 2.00, -2.27, 2.04, -2.16, -2.01, 3.09, 2.17, -2.00, -2.05, -2.14, 2.04, 2.06, -2.21, 2.01, -2.02, -2.01]
  };

  // 🔹 función existente para calcular métricas
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
  const router = useRouter();
  const results = useMemo(() => {
    const out = {};
    for (const botName in botsData) {
      out[botName] = calculateReturns(botsData[botName], leverage);
    }
    return out;
  }, [leverage, botsData]);

  // 🔹 función NUEVA para curva de capital
  const getEquityCurve = (trades, leverageMultiplier = 1) => {
    let capital = 100;
    return trades.map((pct, index) => {
      capital = capital * (1 + (pct * leverageMultiplier) / 100);
      return { trade: index + 1, capital };
    });
  };

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

  // 🔹 dataset para gráfico comparativo
  const comparativeData = (() => {
    const firstBot = Object.keys(botsData)[0];
    if (!firstBot) return [];

    const curves = {};
    for (const botName in botsData) {
      curves[botName] = getEquityCurve(botsData[botName], leverage);
    }

    const length = curves[firstBot].length;
    const combined = [];
    for (let i = 0; i < length; i++) {
      const row = { trade: i + 1 };
      for (const botName in curves) {
        row[botName] = curves[botName][i]?.capital ?? null;
      }
      combined.push(row);
    }
    return combined;
  })();

  const irAInit = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Análisis Detallado de Bots de Trading</h1>
          <p className="text-slate-600">Comparación de rendimientos lineales vs compuestos con apalancamiento</p>
        </div>

        {/* Apalancamiento */}
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

        {/* Botones para elegir bot */}
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

        {/* Tarjetas por bot */}
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
                {/* Métricas */}
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

                {/* 🔹 Gráfico curva de capital */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">📈 Curva de Capital</h3>
                  <div className="w-full h-64">
                    <ResponsiveContainer>
                      <LineChart
                        data={getEquityCurve(botsData[botName], leverage)}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                      >
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="trade" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="capital"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Diferencia */}
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

        {/* 🔹 Gráfico comparativo */}
        {comparativeData.length > 0 && (
          <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              📊 Comparativa Curvas de Capital (todos los bots) {leverage > 1 ? `(x${leverage})` : ''}
            </h3>
            <div className="w-full h-80">
              <ResponsiveContainer>
                <LineChart
                  data={comparativeData}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="trade" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {Object.keys(botsData).map((botName, idx) => {
                    const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
                    return (
                      <Line
                        key={botName}
                        type="monotone"
                        dataKey={botName}
                        stroke={colors[idx % colors.length]}
                        strokeWidth={2}
                        dot={false}
                      />
                    );
                  })}
                </LineChart>
              </ResponsiveContainer>
            </div> 
          </div>
        )}
          
      </div>
       <button onClick={irAInit} className={`px-6 py-3 rounded-lg font-bold bg-purple-600 text-white shadow-lg scale-100 mt-6 transition-all duration-300 hover:scale-110 justify-center mx-auto flex items-center gap-2`}>
                Inicio
              </button>
    </div>
  );
};

export default TradingBotsAnalysis;

