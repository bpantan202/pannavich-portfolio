import { FC } from "react";

import imgA from "/img/scopus/A.png";
import imgB from "/img/scopus/B.png";
import imgC from "/img/scopus/C.png";
import imgD from "/img/scopus/D.png";
import imgE from "/img/scopus/E.png";
import imgF from "/img/scopus/F.png";
import gitLogo from "/img/github-mark.svg";

const ScopusRS: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1>Scopus Research: Data Analytics 📚</h1>
        <hr className="mt-5" />
      </div>
      <h2 className="flex">
        <div className="font-bold mr-1">Tools:</div>
        Python, Selenium, PySpark, Plotly, Streamlit, K-Means Clustering, Power
        BI, Streamlit
      </h2>

      <div>
        Data analysis and research impact assessment using data science
        techniques. By leveraging data extraction, web scraping, and big data
        processing, we analyzed research publications from Chulalongkorn
        University and Kasetsart University.
        <span className="block mb-4" />
        Using Spark, we processed citation data and applied K-Means clustering
        to categorize research impact. Power BI and Streamlit were utilized for
        data visualization, providing insights into citation trends,
        international collaborations, and subject matter distribution.
        <span className="block mb-4" />
        The findings highlight that Chulalongkorn University has higher research
        output and global citation influence, while Kasetsart University’s
        research is more regionally concentrated. This project demonstrates
        data-driven decision-making by extracting meaningful insights from large
        datasets, supporting academic and institutional analysis.
      </div>

      <div>
        <img src={imgF} className="w-full object-contain" />
      </div>
      <div>
        <img src={imgA} className="w-full object-contain" />
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Reference research from</div>
        <img src={imgB} className="w-full object-contain" />
      </div>
      <div>
        <div className="font-bold text-xl mb-2">K-Means</div>
        <img src={imgE} className="w-full object-contain" />
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Internationality</div>
        <img src={imgC} className="w-full object-contain" />
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Newness</div>
        <img src={imgD} className="w-full object-contain" />
      </div>
      {/* <div>
        <div className="font-bold text-xl mb-2">
          Manage Hotel Page (For Admin)
        </div>
        <img src={imgE} className="w-full object-contain" />
        <div className="flex flex-col gap-5 pt-5 sm:flex-row sm:gap-0">
          <img src={imgF} className="w-full sm:w-1/2 object-contain sm:pr-3" />
          <img src={imgG} className="w-full sm:w-1/2 object-contain sm:pl-3" />
        </div>
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Member Page</div>
        <img src={imgH} className="w-full object-contain" />
      </div> */}

      <div>
        <a
          href="https://github.com/bpantan202/Data-Science-of-Scopus-Research.git"
          target="_blank"
          className="flex flex-row items-center gap-1.5 w-fit"
        >
          <img src={gitLogo} alt="Git logo" className="w-5 object-contain" />
          <div className="font-semibold text-sm underline underline-offset-1">
            https://github.com/bpantan202/Data-Science-of-Scopus-Research.git
          </div>
        </a>
      </div>
    </div>
  );
};

export default ScopusRS;
