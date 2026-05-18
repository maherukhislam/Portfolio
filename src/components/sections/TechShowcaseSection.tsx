import { SectionHeading } from "../SectionHeading";

export function TechShowcaseSection() {
  // Generate simulated GitHub data cell configurations
  // 4 rows, 28 columns = 112 cells
  const cellCounts = [
    [0, 1, 2, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 0, 1, 2, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 2, 4],
    [1, 2, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 1, 2, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 4, 3, 1, 2],
    [2, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 1, 2, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 4, 3, 2, 4, 0],
    [3, 2, 1, 0, 4, 3, 2, 1, 0, 1, 2, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 0, 3]
  ];

  return (
    <section className="shell section tech-showcase" id="tech-showcase" aria-labelledby="showcase-title">
      <SectionHeading
        eyebrow="Technical Infrastructure"
        title="Showcasing Systems Depth"
        description="Evidence of technical commitment, continuous infrastructure building, and data pipeline structures."
      />

      <div className="tech-showcase__grid">
        {/* Simulated GitHub activity matrix */}
        <div className="git-matrix panel">
          <div className="git-matrix__header">
            <span>📊 CONTINUOUS_INTEGRATION_MATRIX.log</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>SYSTEM ACTIVE</span>
          </div>
          <div className="git-matrix__calendar">
            {cellCounts.flatMap((row, rIdx) => 
              row.map((val, cIdx) => (
                <div 
                  key={`${rIdx}-${cIdx}`} 
                  className={`git-matrix__cell git-matrix__cell--${val}`}
                  title={`Operational commits: intensity level ${val}`}
                />
              ))
            )}
          </div>
          <div className="git-matrix__footer">
            <span>1,024 telemetry commits across institutional systems</span>
            <div className="git-matrix__legend">
              <span>Less</span>
              <div className="git-matrix__legend-box" />
              <div className="git-matrix__legend-box git-matrix__cell--1" />
              <div className="git-matrix__legend-box git-matrix__cell--2" />
              <div className="git-matrix__legend-box git-matrix__cell--3" />
              <div className="git-matrix__legend-box git-matrix__cell--4" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* ASCII Ledger Sync Flowchart */}
        <div className="pipeline-terminal panel">
          <div className="pipeline-terminal__header">
            <span>⚙️ FINANCIAL_LEDGER_SYNC_ARCHITECTURE.txt</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>v1.0.4 PROD</span>
          </div>
          <pre className="pipeline-terminal__diagram">
            <span className="hl">[Local Ledger Terminal]</span>{"\n"}
            {"   │\n"}
            {"   ├── (Read physical records / Excel data logs)\n"}
            {"   ▼\n"}
            {" "}
            <span className="hl">[sqlite_balance_audit.py]</span> ───► [Query Speed: <span className="hl">&lt; 0.001s</span>]{"\n"}
            {"   │\n"}
            {"   ├── (Encode JSON ledger payload)\n"}
            {"   ▼\n"}
            {" "}
            <span className="hl">[Local Data Ledger Sync]</span>{"\n"}
            {"   │\n"}
            {"   ├── (Sync over HTTPS POST / Secure SSL)\n"}
            {"   ▼\n"}
            {" "}
            <span className="hl">[dccnsc.org Web Server Portal]</span> ───► [State: <span className="hl">ONLINE</span>]
          </pre>
        </div>
      </div>
    </section>
  );
}
