import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Overview from "./Pages/Documentation/Overview.jsx";
import "./index.css";
import Examples from "./Components/Examples/Examples.jsx";
import Integrations from "./Components/Integrations/Integrations.jsx";
import Api_reference from "./Components/Api-reference/Api_reference.jsx";
import { Faqs, MemoryTypes, Quickstart ,PlatformGuide ,Dify } from "./Pages/index.js";
import MemoryOperations from "./Pages/Documentation/MemoryOperations.jsx";
import Introduction_platform from "./Pages/Documentation/Introduction_platform.jsx";
import Pythonsdk from "./Pages/Documentation/Pythonsdk.jsx";
import Nodesdk from "./Pages/Documentation/Nodesdk.jsx";
import OpenAICompatibility from "./Pages/Documentation/OpenAiCompatibility.jsx";
import CustomFactExtPrompt from "./Pages/Documentation/CustomFactExtPrompt.jsx";
import Customupdatememory from "./Pages/Documentation/Customupdatememory.jsx";
import MultimodalSupt from "./Pages/Documentation/MultimodalSupt.jsx";
import RestAPIServer from "./Pages/Documentation/RestAPIServer.jsx";
import Graph0verview from "./Pages/Documentation/Graph0verview.jsx";
import GraphFeatures from "./Pages/Documentation/GraphFeatures.jsx";
import LLMConfig from "./Pages/Documentation/LLMConfig.jsx";
import LLMOverview from "./Pages/Documentation/LLMOverview.jsx";
import Llamaindexx from "./Pages/Integrations/Llamaindex.jsx";
import SupportLLMs from "./Pages/Documentation/SupportLLMs.jsx";
import VectorDBOverview from "./Pages/Documentation/VectorDBOverview.jsx";
import VectorDBConfig from "./Pages/Documentation/VectorDBConfig.jsx";
import SupportVectorDB from "./Pages/Documentation/SupportVectorDB.jsx";
import ContributionDevelopment from "./Pages/Documentation/ContributionDevelopment.jsx";
import ContributionDocumentation from "./Pages/Documentation/ContributionDocumentation.jsx";
import Overview_example from "./Pages/Examples/Overview_example.jsx";
import RecallrAiDemo from "./Pages/Examples/RecallrAiDemo.jsx";
import AiCompanion from "./Pages/Examples/AiCompanion.jsx";
import RecallAiWithOllama from "./Pages/Examples/RecallAiWithOllama.jsx";
import PersonalizedAiTutor from "./Pages/Examples/PersonalizedAiTutor.jsx";
import LlamaIndexReactAgent from "./Pages/Examples/LlamaIndexReactAgent.jsx";
import ChromeExt from "./Pages/Examples/ChromeExt.jsx";
import DocumentEditwithRecalIrAI from "./Pages/Examples/DocumentEditwithRecalIrAI.jsx";
import MultimodalDemowithRecallrAi from "./Pages/Examples/MultimodalDemowithRecallrAi.jsx";
import Overview_integration from "./Pages/Integrations/Overview_integration.jsx";
import VercelAISDK from "./Pages/Integrations/VercelAISDK.jsx";
import CrewAI from "./Pages/Integrations/CrewAI.jsx";
import Autogen from "./Pages/Integrations/Autogen.jsx";
import Langchain from "./Pages/Integrations/Langchain.jsx";
import LangGraph from "./Pages/Integrations/LangGraph.jsx";
import LangchainTools from "./Pages/Integrations/LangchainTools.jsx";
import MCPServer from "./Pages/Integrations/MCPServer.jsx";
import Overview_api_reference from "./Pages/Api-reference/Overview_api_reference.jsx";
import AddMemories from "./Pages/Api-reference/AddMemories.jsx";
import SearchMemoriesV2 from "./Pages/Api-reference/SearchMemoriesV2.jsx";
import SearchMemoriesV1Deprecated from "./Pages/Api-reference/SearchMemoriesV1Deprecated.jsx";
import GetMemoriesV1Deprecated from "./Pages/Api-reference/GetMemoriesV1Deprecated.jsx";
import GetMemoriesV2 from "./Pages/Api-reference/GetMemoriesV2.jsx";
import MemoryHistory from "./Pages/Api-reference/MemoryHistory.jsx";
import GetMemoryExport from "./Pages/Api-reference/GetMemoryExport.jsx";
import GetUsers from "./Pages/Api-reference/GetUsers.jsx";
import DeleteUsers from "./Pages/Api-reference/DeleteUsers.jsx";
import AddMember from "./Pages/Api-reference/AddMember.jsx";
import CreateOrganization from "./Pages/Api-reference/CreateOrganization.jsx";
import GetOrganizations from "./Pages/Api-reference/GetOrganizations.jsx";
import DeleteOrganization from "./Pages/Api-reference/DeleteOrganization.jsx";
import GetMembers from "./Pages/Api-reference/GetMembers.jsx";
import CreateWebhook from "./Pages/Api-reference/CreateWebhook.jsx";
import Getwebhook from "./Pages/Api-reference/Getwebhook.jsx";
import UpdateWebhook from "./Pages/Api-reference/UpdateWebhook.jsx";
import DeleteWebhook from "./Pages/Api-reference/DeleteWebhook.jsx";
import UpdateOrg from "./Pages/Api-reference/UpdateOrg.jsx";
import GetMemory from "./Pages/Api-reference/GetMemory.jsx";
import UpdateMemory from "./Pages/Api-reference/UpdateMemory.jsx";
import Batchupdatememory from "./Pages/Api-reference/Batchupdatememory.jsx";
import DeleteMemory from "./Pages/Api-reference/DeleteMemory.jsx";
import Batchdeletememories from "./Pages/Api-reference/Batchdeletememories.jsx";
import Deletememories from "./Pages/Api-reference/Deletememories.jsx";
import CreateMemoryExport from "./Pages/Api-reference/CreateMemoryExport.jsx";
import CustomersupportAIagent from "./Pages/Documentation/CustomersupportAIagent.jsx";
import Example from "./Components/Examples/Examples.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/overview" replace />
      },
      { path: "overview", 
        element: <Overview />, 
      },
      {
        path: "quickstart",
        element: <Quickstart/>
      },
      {
        path: "faqs",
        element: <Faqs/>
      },
      {
        path:"core-concept",
        element: <Navigate to="/core-concept/memory-types" replace />,
        
      },{
        path: "core-concept/memory-types",
        element: <MemoryTypes/>
      },{
        path: "core-concept/memory-operations",
        element:<MemoryOperations/>
      },
      {
        path: "platform",
        element: <Navigate to="/platform/introduction" replace />,
      },{
        path: "platform/introduction",
        element: <Introduction_platform/>
      },{
        path: "platform/guide",
        element: <PlatformGuide/>
      },{
        path: "platform/features",
        element:<platformfeatures/>
      },{
        path: "open-source",
        element: <Navigate to="/open-source/python-sdk" replace />,
      },{
       path: "open-source/python-sdk", 
       element: <Pythonsdk/>
      },
      {
        path: "open-source/node-sdk",
        element: <Nodesdk/>
      },
      {
        path: "open-source/features",
        element: <Navigate to="/open-source/features/openai-compatibility" replace />,
      },
      {
        path: "open-source/features/openai-compatibility",
        element: <OpenAICompatibility/>
      },
      {
        path: "open-source/features/custom-fact-extraction",
        element: <CustomFactExtPrompt/>
      },{
        path: "open-source/features/custom-update-memory",
        element: <Customupdatememory/>
      },
      {
        path: "open-source/features/multimodal-support",
        element:<MultimodalSupt/>
      },{
        path: "open-source/features/rest-api",
        element:<RestAPIServer/>
      },
      {
        path: "open-source/graph-memory",
        element: <Navigate to="/open-source/graph-memory/overview" replace />,
      },{
        path: "open-source/graph-memory/overview",
        element:<Graph0verview/>
      },{
        path: "open-source/graph-memory/features",
        element: <GraphFeatures/>
      },{
        path: "open-source/llms",
        element: <Navigate to="/open-source/llms/overview" replace />,
      },{
        path: "open-source/llms/overview",
        element: <LLMOverview/>
      },
      {
        path: "open-source/llms/configurations",
        element: <LLMConfig/>
      },
      {
        path: "open-source/llms/supported",
        element:<SupportLLMs/>
      },
      { 
        path: "open-source/vector-databases",
        element: <Navigate to="/open-source/vector-databases/overview" replace />,
      },{
        path: "open-source/vector-databases/overview",
        element: <VectorDBOverview/>
      },{
        path: "open-source/vector-databases/configurations",
        element: <VectorDBConfig/>
      },{
        path: "open-source/vector-databases/supported",
        element:<SupportVectorDB/>
      },{
        path: "open-source/embedding-models",
      },
      {
        path: "contribution",
        element: <Navigate to="/contribution/development" replace />,
      },{
        path: "contribution/development",
        element: <ContributionDevelopment/>
      },{
        path: "contribution/documentation",
        element: <ContributionDocumentation/>
      },
      { path: "examples",
        element:<Example/>,
        children:[{
          path: "overview",
          element: <Overview_example/>,
        },{
          path: "Recallrai-demo",
          element: <RecallrAiDemo/>
        },{
          path: "AI_Companion",
          element: <AiCompanion/>
        },{
          path: "RecallrAi-with-Ollama",
          element:<RecallAiWithOllama/>
        },{
          path: "Personalized-AI-Tutor",
          element: <PersonalizedAiTutor/>
        },
       {
         path: "Customer-Support-AI-Agent",
         element: <CustomersupportAIagent/>
        },
        {
          path: "Personal-AI-Travel-Assistant",
          element:<PersonalizedAiTutor/>
        },
      {
        path: "LlamaIndex-ReAct-Agent",
        element:<LlamaIndexReactAgent/>
      },{
        path: "chrome-extension",
        element:<ChromeExt/>
      },{
        path: "Document-Editing-with-RecallrAi",
        element:<DocumentEditwithRecalIrAI/>
      },{
        path: "Multimodal-Demo-with-RecallrAi",
        element: <MultimodalDemowithRecallrAi/>
      }]
      },
      {
        path: "integrations",
        element: <Integrations />,
        children:[{
            path: "overview",
            element:<Overview_integration/>
          },{
            path: "vercel-ai-sdk",
            element:<VercelAISDK/>
          },
          {
            path: "crewai",
            element:<CrewAI/>
          },
          {
            path: "autogen",
            element:<Autogen/>
          },{
            path: "langchain",
            element:<Langchain/>
          },
          {
            path: "langgraph",
            element:<LangGraph/>
          },{
            path: "llamaindex",
            element:<Llamaindexx/>
          },{
            path: "langchain-tools",
            element:<LangchainTools/>
          },{
            path: "dify",
            element: <Dify/>
          },{
            path: "mcp-server",
            element:<MCPServer/>
          }
          
        ],
      },
      {
        path: "api-reference",
        element: <Navigate to="/api-reference/overview" replace/>,
      },
      {
        path: "api-reference/overview",
        element: <Overview_api_reference />,
      },
      // Memory APIs
      {
        path: "api-reference/memory",
        element: <Navigate to="/api-reference/memory/add-memories" replace/>,
      },
      {
        path: "api-reference/memory/add-memories",
        element: <AddMemories/>,
      },
      {
        path: "api-reference/memory/search-memories-v2",
        element: <SearchMemoriesV2/>,
      },
      {
        path: "api-reference/memory/search-memories-v1",
        element: <SearchMemoriesV1Deprecated/>,
      },
      {
        path: "api-reference/memory/get-memories-v2",
        element: <GetMemoriesV2/>,
      },
      {
        path: "api-reference/memory/get-memories-v1",
        element: <GetMemoriesV1Deprecated/>,
      },
      {
        path: "api-reference/memory/memory-history",
        element: <MemoryHistory/>,
      },
      {
        path:"/api-reference/memory/get-memory",
        element:<GetMemory/>
      },
      {
        path:"api-reference/memory/update-memory",
        element:<UpdateMemory/>
      },
      {
       path:"/api-reference/memory/batch-update-memory",
       element:<Batchupdatememory/>
      },
      {
       path:"/api-reference/memory/delete-memory",
       element:<DeleteMemory/>
      },
      {
        path:"api-reference/memory/batch-delete-memories",
        element:<Batchdeletememories/>
      },
      {
        path:"api-reference/memory/delete-memories",
        element:<Deletememories/>
      },
      {
        path:"api-reference/memory/create-memory-export",
        element:<CreateMemoryExport/>
      },
      {
        path:"/api-reference/memory/get-memory-export",
        element:<GetMemoryExport/>

      },
      // Entities APIs
      {
        path: "api-reference/entities",
        element: <Navigate to="/api-reference/entities/get-users" replace/>,
      },
      {
        path: "api-reference/entities/get-users",
        element: <GetUsers/>,
      },
      {
        path: "api-reference/entities/delete-users",
        element: <DeleteUsers/>,
      },
      // Organizations APIs
      {
        path: "api-reference/organizations",
        element: <Navigate to="/api-reference/organizations/create-org" replace/>,
      },
      {
        path: "api-reference/organizations/create-org",
        element: <CreateOrganization/>,
      },
      {
        path: "api-reference/organizations/get-org",
        element: <GetOrganizations/>,
      },
      {
        path:"/api-reference/organizations/update-org",
        element: <UpdateOrg/>
      },
      {
        path: "api-reference/organizations/get-members",
        element: <GetMembers/>,
      },
      {
        path: "api-reference/organizations/add-members",
        element: <AddMember/>,
      },
      {
        path: "/api-reference/organizations/delete-org",
        element: <DeleteOrganization/>,
      },
      // Webhook APIs
      {
        path: "api-reference/webhooks",
        element: <Navigate to="/api-reference/webhooks/create-webhook" replace/>,
      },
      {
        path: "api-reference/webhook-apis/create-webhook",
        element: <CreateWebhook/>,
      },
      {
        path: "api-reference/webhook-apis/get-webhook",
        element: <Getwebhook/>,
      },
      {
        path: "api-reference/webhook-apis/update-webhook",
        element: <UpdateWebhook/>,
      },
      {
        path: "/api-reference/webhook-apis/delete-webhook",
        element: <DeleteWebhook/>,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);