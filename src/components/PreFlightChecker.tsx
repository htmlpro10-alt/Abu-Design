import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileCheck, 
  Layers, 
  Maximize2, 
  Sparkles, 
  Upload, 
  DownloadCloud,
  Check
} from 'lucide-react';

export const PreFlightChecker: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<'bleed' | 'color' | 'resolution' | 'fonts'>('bleed');
  const [selectedFormat, setSelectedFormat] = useState<string>('pdf');
  const [hasBleed, setHasBleed] = useState<boolean>(true);
  const [isCmyk, setIsCmyk] = useState<boolean>(true);
  const [fontsOutlined, setFontsOutlined] = useState<boolean>(true);
  const [is300Dpi, setIs300Dpi] = useState<boolean>(true);

  // Pre-flight score calculation
  const scoreItems = [hasBleed, isCmyk, fontsOutlined, is300Dpi];
  const passedCount = scoreItems.filter(Boolean).length;
  const isReadyForPress = passedCount === 4;

  return (
    <section id="preflight" className="py-20 md:py-28 border-b border-neutral-800 bg-[#0A0D12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-amber-400 mb-2">Print Pre-Flight Specifications</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              Engineer your artwork for zero press delays.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            95% of printing misalignments stem from missing bleed or RGB color shifts. Use our production checklist before sending your files to South Gate.
          </p>
        </div>

        {/* 2-Column Pre-flight interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Guides (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-8">
            
            {/* Guide Navigation Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              <button
                onClick={() => setActiveGuide('bleed')}
                className={`p-2.5 text-xs font-mono rounded-lg border text-center transition-all ${
                  activeGuide === 'bleed'
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                1. 3mm Bleed Rule
              </button>
              <button
                onClick={() => setActiveGuide('color')}
                className={`p-2.5 text-xs font-mono rounded-lg border text-center transition-all ${
                  activeGuide === 'color'
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                2. CMYK vs RGB
              </button>
              <button
                onClick={() => setActiveGuide('resolution')}
                className={`p-2.5 text-xs font-mono rounded-lg border text-center transition-all ${
                  activeGuide === 'resolution'
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                3. 300 DPI Standard
              </button>
              <button
                onClick={() => setActiveGuide('fonts')}
                className={`p-2.5 text-xs font-mono rounded-lg border text-center transition-all ${
                  activeGuide === 'fonts'
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                4. Outlined Fonts
              </button>
            </div>

            {/* Guide 1: Bleed Visualizer */}
            {activeGuide === 'bleed' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white">
                    The 3mm Bleed & Safe Margin Blueprint
                  </h3>
                  <span className="text-xs font-mono text-amber-400">Essential for Die-Cutting</span>
                </div>

                {/* Interactive Diagram */}
                <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 relative flex items-center justify-center">
                  <div className="w-full max-w-sm aspect-[1.75/1] border-2 border-dashed border-red-500/80 bg-red-500/5 p-4 rounded relative flex items-center justify-center">
                    <span className="absolute -top-3 left-3 bg-neutral-950 px-2 text-[10px] font-mono text-red-400">
                      Red Line: Bleed Box (+3mm on all 4 sides)
                    </span>

                    <div className="w-full h-full border-2 border-amber-400/80 bg-amber-400/5 p-4 rounded relative flex items-center justify-center">
                      <span className="absolute -top-3 left-3 bg-neutral-950 px-2 text-[10px] font-mono text-amber-400">
                        Amber Line: Finished Trim Edge (Cut Line)
                      </span>

                      <div className="w-full h-full border border-dashed border-emerald-400/80 bg-emerald-400/5 rounded flex items-center justify-center p-2 text-center">
                        <div className="text-[11px] font-mono text-emerald-300">
                          Safe Zone (Keep text 4mm inside trim)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Industrial paper guillotines slice stacks of 500 sheets at a time. The blade can shift by fractions of a millimeter. By extending background imagery 3mm beyond the final cut line, you guarantee no accidental white borders occur.
                </p>
              </div>
            )}

            {/* Guide 2: CMYK vs RGB */}
            {activeGuide === 'color' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white">
                    CMYK Process vs RGB Screen Color
                  </h3>
                  <span className="text-xs font-mono text-amber-400">Color Fidelity Rule</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <div className="text-xs font-mono text-red-400 mb-1">❌ RGB Screen Profile</div>
                    <div className="h-16 rounded bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] mb-2" />
                    <p className="text-[11px] text-neutral-400">
                      Emitted light colors. Looks hyper-saturated on monitors but cannot be reproduced with physical inks.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <div className="text-xs font-mono text-emerald-400 mb-1">✅ CMYK Press Standard</div>
                    <div className="h-16 rounded bg-gradient-to-r from-[#00A0E9] to-[#E6007E] mb-2" />
                    <p className="text-[11px] text-neutral-400">
                      Subtractive cyan, magenta, yellow, and key black inks printed onto paper. What you see is what cures.
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Always convert your artwork to <strong>CMYK (Coated FOGRA39 or US Web Coated SWOP v2)</strong> before export. Abu Design verifies color registers with 5000K daylight-balanced spectrophotometers.
                </p>
              </div>
            )}

            {/* Guide 3: Resolution */}
            {activeGuide === 'resolution' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white">
                    300 DPI at 100% Physical Scale
                  </h3>
                  <span className="text-xs font-mono text-amber-400">Zero Pixelation Guarantee</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-850">
                    <span className="text-neutral-400">Web Display:</span>
                    <span className="text-red-400">72 DPI (Will appear blurry and pixelated in print)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-850">
                    <span className="text-neutral-400">Offset & Digital:</span>
                    <span className="text-emerald-400 font-bold">300 DPI at 1:1 Output Scale</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Large Signage & Flex:</span>
                    <span className="text-amber-300">100–150 DPI at Full Real Dimensions</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Never pull logos from Google Images or WhatsApp forwarded photos, as WhatsApp compresses images to 72 DPI. Always deliver vector files (.AI, .EPS, .CDR) or high-res 300 DPI master scans.
                </p>
              </div>
            )}

            {/* Guide 4: Fonts & Curves */}
            {activeGuide === 'fonts' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white">
                    Convert All Text to Curves (Create Outlines)
                  </h3>
                  <span className="text-xs font-mono text-amber-400">CorelDRAW & Illustrator Standard</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono space-y-2">
                  <div className="text-neutral-300">
                    Shortcut in Adobe Illustrator: <span className="text-amber-400 font-bold">Ctrl + Shift + O (Cmd + Shift + O)</span>
                  </div>
                  <div className="text-neutral-300">
                    Shortcut in CorelDRAW: <span className="text-amber-400 font-bold">Ctrl + Q (Convert to Curves)</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  When Tamil fonts (like Baamini, Senthamil, Latha) or custom English typefaces are not outlined, the printing computer may replace your font with default Arial, destroying the typography alignment. Converting to curves permanently freezes letter shapes into vectors.
                </p>
              </div>
            )}

          </div>

          {/* Right Column: Interactive Pre-Flight Diagnostics (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-400" />
                <h3 className="font-display text-lg font-bold text-white">
                  Pre-Flight Readiness Check
                </h3>
              </div>
              <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                isReadyForPress ? 'bg-emerald-400/20 text-emerald-400' : 'bg-amber-400/20 text-amber-400'
              }`}>
                {passedCount} of 4 Checks Passed
              </span>
            </div>

            {/* Interactive Toggle Checkboxes */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => setHasBleed(!hasBleed)}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between text-xs font-mono ${
                  hasBleed ? 'bg-neutral-950 border-emerald-500/50 text-neutral-200' : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                    hasBleed ? 'bg-emerald-400 border-emerald-400 text-neutral-950' : 'border-neutral-700'
                  }`}>
                    {hasBleed && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>3mm Outer Bleed included</span>
                </div>
                <span className={hasBleed ? 'text-emerald-400' : 'text-neutral-600'}>
                  {hasBleed ? 'PASSED' : 'REQUIRED'}
                </span>
              </button>

              <button
                onClick={() => setIsCmyk(!isCmyk)}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between text-xs font-mono ${
                  isCmyk ? 'bg-neutral-950 border-emerald-500/50 text-neutral-200' : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                    isCmyk ? 'bg-emerald-400 border-emerald-400 text-neutral-950' : 'border-neutral-700'
                  }`}>
                    {isCmyk && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>Color Mode set to CMYK</span>
                </div>
                <span className={isCmyk ? 'text-emerald-400' : 'text-neutral-600'}>
                  {isCmyk ? 'PASSED' : 'REQUIRED'}
                </span>
              </button>

              <button
                onClick={() => setFontsOutlined(!fontsOutlined)}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between text-xs font-mono ${
                  fontsOutlined ? 'bg-neutral-950 border-emerald-500/50 text-neutral-200' : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                    fontsOutlined ? 'bg-emerald-400 border-emerald-400 text-neutral-950' : 'border-neutral-700'
                  }`}>
                    {fontsOutlined && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>Fonts Outlined / Converted to Curves</span>
                </div>
                <span className={fontsOutlined ? 'text-emerald-400' : 'text-neutral-600'}>
                  {fontsOutlined ? 'PASSED' : 'REQUIRED'}
                </span>
              </button>

              <button
                onClick={() => setIs300Dpi(!is300Dpi)}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between text-xs font-mono ${
                  is300Dpi ? 'bg-neutral-950 border-emerald-500/50 text-neutral-200' : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                    is300Dpi ? 'bg-emerald-400 border-emerald-400 text-neutral-950' : 'border-neutral-700'
                  }`}>
                    {is300Dpi && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>Raster Images at 300+ DPI</span>
                </div>
                <span className={is300Dpi ? 'text-emerald-400' : 'text-neutral-600'}>
                  {is300Dpi ? 'PASSED' : 'REQUIRED'}
                </span>
              </button>
            </div>

            {/* Diagnostic Outcome Box */}
            <div className={`p-4 rounded-xl border mb-6 ${
              isReadyForPress
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                : 'bg-amber-500/10 border-amber-500/40 text-amber-200'
            }`}>
              <div className="flex items-center gap-2 font-mono font-bold text-xs mb-1">
                {isReadyForPress ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">File is Press-Ready for Heidelberg & Roland</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-300">Adjustments Recommended Before Gang-Run</span>
                  </>
                )}
              </div>
              <p className="text-[11px] leading-relaxed opacity-90">
                {isReadyForPress
                  ? 'Your artwork fulfills all industrial press tolerances. You can submit your file directly via WhatsApp or email for immediate RIP plate output.'
                  : 'Please check the unchecked requirements above to ensure razor-sharp edges and color accuracy before commercial printing.'}
              </p>
            </div>

            {/* Supported formats list */}
            <div className="pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="text-neutral-300 font-bold block mb-1">Accepted File Extensions:</span>
              <span>.PDF/X-1a · .CDR (v12 to 2024) · .AI · .EPS · .TIFF (uncompressed)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
