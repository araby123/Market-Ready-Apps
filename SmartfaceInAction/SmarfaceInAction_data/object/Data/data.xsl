<?xml version="1.0" ?>
<SMARTFACEPROJECT xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="SmartfaceProjectPlayerUpdated.xsd">
<PROJECT SID="-1" WS="http://www.smartface.biz" dateLastResourceUpdated="010101000000" AppID="1701667150" AppName="Smartface Demo" CID="0" Ver="1.0.0" ScreenW="2048" ScreenH="1536" Dpi="264" FacebookAppUID="" FacebookAppSecret="" TwitterConsumerKey="" TwitterConsumerSecret="">
	<MAPAPI AndroidMapKey="" IosGeocodingKey="" />
	<ADMOB AdMobPublisherId="" AdMobTestUsage="0" />
	<DEVICEORIENTATIONS DeviceOrientationPortrait="1" DeviceOrientationUpsideDown="0" DeviceOrientationLandscapeLeft="0" DeviceOrientationLandscapeRight="0" />
	<ANDROIDPRODUCTKEY AndroidProductKey="" />
	<ANDROIDSENDERID AndroidSenderID="" />
	<APPLICATIONCACHESIZE ApplicationCacheSize="50" />
	<APPLICATIONNAME ApplicationName="Smartface in Action" />
	<NAVIGATIONBARUPDATE NavigationBarUpdate="1" />
	<RESOURCES>
	</RESOURCES>
	<FLURRYANALYTICS Enb="0" IOSAppID="" AndroidAppID="" LogUserInfoStatistics="1" LogApplicationUsageDurations="1" LogNetworkUsage="0" LogApplicationStartEvents="0" LogAudioPlayDurations="0" LogVideoPlayDurations="0" LogShowPageActions="0" LogCallActions="0" LogSendSMSActions="0">
		<DATA>
			<PRM Nm="Val1" Val="" />
			<PRM Nm="Val2" Val="" />
			<PRM Nm="Val3" Val="" />
		</DATA>
	</FLURRYANALYTICS>
	<LOGGING LogServerUrl="" MaxLogSize="30" LogError="0" LogWarning="0" LogDebug="0">
	</LOGGING>
	<SESANALYTICS SESAPIKey="BaLsq7OWNkiRQXjofMhJGw" SESAPIURL="http://analytics.smartface.io/api/AnalyticsData/" />
	<DATATABLES>
		<TABLE ID="42E39513-5220-47F1-B073-188455826EAC" Name="EmptyTable" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="emptyColumn" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="A5CE94F2-5AAC-466F-99CD-9440D7C87647" Name="EmptyTableforNews" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="id" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="E109CCF7-9634-46F8-B2F9-94F26E2BD350" Name="tblImage" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="data" Type="PICTURE" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="B76A55F2-717B-4BFB-B8DF-863F346011C2" Name="tblInterest" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="interestName" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="image" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="3" Name="fontColor" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="1AE4AAFF-4DF4-49CE-980D-603ACE251E8B" Name="tblNotification" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="imgNotification" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="textNotification" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="E26B429C-3E97-49AD-B604-23BFE370AC2B" Name="twitterTable" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="id" Type="INTEGER" PrimaryKey="0" AutoIncrement="1" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="13F43F73-F592-45FE-B923-9D3F5DA92667" Name="wcListView_InDTbl" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="rowNumber" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="pagenumber" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="B3F61813-FF01-4B64-A13D-A8EE9DFAD49A" Name="wcListView_OutDTblnews" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="newsId" Type="INTEGER" PrimaryKey="1" AutoIncrement="1" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="news" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="1" IsSecure="0" />
			<COLUMN ID="3" Name="title" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="4" Name="id" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="5" Name="type" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="6" Name="description" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="7" Name="id1" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="8" Name="url" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="61CCEF5E-09D7-486A-8B4C-CBD6DA48FD7A" Name="wcMap_HeaderOutDTblwcMap" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="wcMapId" Type="INTEGER" PrimaryKey="1" AutoIncrement="1" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="wcMap" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="1" IsSecure="0" />
			<COLUMN ID="3" Name="Cache_Control" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="4" Name="Pragma" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="5" Name="Transfer_Encoding" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="6" Name="Content_Type" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="7" Name="Content_Encoding" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="8" Name="Expires" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="9" Name="Vary" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="10" Name="Server" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="11" Name="X_AspNet_Version" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="12" Name="X_Powered_By" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="13" Name="Date" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="FE147B5B-3E2F-4887-A945-010D064454A4" Name="wcMap_OutDTblpins" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="pinsId" Type="INTEGER" PrimaryKey="1" AutoIncrement="1" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="pins" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="1" IsSecure="0" />
			<COLUMN ID="3" Name="title" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="4" Name="id" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="5" Name="type" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="6" Name="subtitle" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="7" Name="latitude" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="8" Name="address" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="9" Name="longitude" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="404F6D12-0F3D-46F3-B343-B654C6ABFFF4" Name="wcMap_OutDTblwcMap" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="wcMapId" Type="INTEGER" PrimaryKey="1" AutoIncrement="1" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="wcMap" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="1" IsSecure="0" />
			<COLUMN ID="3" Name="success" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="4" Name="error" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="7620770A-B7DC-4A83-8CD1-F2C657016A59" Name="wcSquareView_InDTbl" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="rowNumber" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="pageNumber" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="422B7D2E-F8C2-4C74-AEC4-20B7C076D248" Name="wcSquareView_OutDTblnews" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="newsId" Type="INTEGER" PrimaryKey="1" AutoIncrement="1" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="news" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="1" IsSecure="0" />
			<COLUMN ID="3" Name="title" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="4" Name="id" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="5" Name="type" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="6" Name="description" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="7" Name="id1" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="8" Name="url" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="CDDE33E2-780C-4363-83A6-0AD48CD6449F" Name="wcTwitter_OutDTblwcTwitter" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="wcTwitterId" Type="INTEGER" PrimaryKey="1" AutoIncrement="1" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="wcTwitter" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="1" IsSecure="0" />
			<COLUMN ID="3" Name="coordinates" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="3730FAD9-5699-4D74-A9A4-E17A60D3A2EF" Name="wcTwitter_RequestHeadersDTbl" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="Authorization" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
	</DATATABLES>
	<DATASETS>
		<DATASET ID="4FB04D03-7ACA-4A3B-AED5-235965D2BFF0" Name="DS_Image" TableID="E109CCF7-9634-46F8-B2F9-94F26E2BD350" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblImage"."data" FROM "tblImage"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblImage.data" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="39B298AA-B1F2-4F2D-95FD-2AEA1494D127" Name="DS_Interest" TableID="B76A55F2-717B-4BFB-B8DF-863F346011C2" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblInterest".* FROM "tblInterest"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblInterest.interestName" />
				<COLUMN ID="2" Name="tblInterest.image" />
				<COLUMN ID="3" Name="tblInterest.fontColor" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="D9E98780-F205-466F-86D2-EB1B2B24DA22" Name="DS_News" TableID="A5CE94F2-5AAC-466F-99CD-9440D7C87647" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "EmptyTableforNews".* FROM "EmptyTableforNews"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="EmptyTableforNews.id" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="076727F0-065E-4E91-B1BE-A1BBCE23B8EF" Name="DS_Notification" TableID="1AE4AAFF-4DF4-49CE-980D-603ACE251E8B" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblNotification"."imgNotification", "tblNotification"."textNotification" FROM "tblNotification"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblNotification.imgNotification" />
				<COLUMN ID="2" Name="tblNotification.textNotification" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="DA82D54F-00E8-450A-96D1-A9F09667844D" Name="DS_twitterTable" TableID="E26B429C-3E97-49AD-B604-23BFE370AC2B" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "twitterTable".* FROM "twitterTable"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="twitterTable.id" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="B28EE248-44AA-4D1B-A1F2-0E5E5067A76E" Name="SquareDataset" TableID="42E39513-5220-47F1-B073-188455826EAC" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "EmptyTable"."emptyColumn" FROM "EmptyTable"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="EmptyTable.emptyColumn" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="C3F3BD9E-1900-4252-ACA0-C56079E3908C" Name="wcListView_InDSet" TableID="13F43F73-F592-45FE-B923-9D3F5DA92667" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcListView_InDTbl"."rowNumber", "wcListView_InDTbl"."pagenumber" FROM "wcListView_InDTbl"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcListView_InDTbl.rowNumber" />
				<COLUMN ID="2" Name="wcListView_InDTbl.pagenumber" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="302C8037-D8D4-4BEE-B846-C91D704C19E7" Name="wcListView_OutDSetnews" TableID="B3F61813-FF01-4B64-A13D-A8EE9DFAD49A" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcListView_OutDTblnews"."newsId", "wcListView_OutDTblnews"."news", "wcListView_OutDTblnews"."title", "wcListView_OutDTblnews"."id", "wcListView_OutDTblnews"."type", "wcListView_OutDTblnews"."description", "wcListView_OutDTblnews"."id1", "wcListView_OutDTblnews"."url" FROM "wcListView_OutDTblnews"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcListView_OutDTblnews.newsId" />
				<COLUMN ID="2" Name="wcListView_OutDTblnews.news" />
				<COLUMN ID="3" Name="wcListView_OutDTblnews.title" />
				<COLUMN ID="4" Name="wcListView_OutDTblnews.id" />
				<COLUMN ID="5" Name="wcListView_OutDTblnews.type" />
				<COLUMN ID="6" Name="wcListView_OutDTblnews.description" />
				<COLUMN ID="7" Name="wcListView_OutDTblnews.id1" />
				<COLUMN ID="8" Name="wcListView_OutDTblnews.url" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="F3E105F8-A56D-4E64-890D-76CDB9357600" Name="wcMap_HeaderOutDSetwcMap" TableID="61CCEF5E-09D7-486A-8B4C-CBD6DA48FD7A" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcMap_HeaderOutDTblwcMap"."wcMapId", "wcMap_HeaderOutDTblwcMap"."wcMap", "wcMap_HeaderOutDTblwcMap"."Cache_Control", "wcMap_HeaderOutDTblwcMap"."Pragma", "wcMap_HeaderOutDTblwcMap"."Transfer_Encoding", "wcMap_HeaderOutDTblwcMap"."Content_Type", "wcMap_HeaderOutDTblwcMap"."Content_Encoding", "wcMap_HeaderOutDTblwcMap"."Expires", "wcMap_HeaderOutDTblwcMap"."Vary", "wcMap_HeaderOutDTblwcMap"."Server", "wcMap_HeaderOutDTblwcMap"."X_AspNet_Version", "wcMap_HeaderOutDTblwcMap"."X_Powered_By", "wcMap_HeaderOutDTblwcMap"."Date" FROM "wcMap_HeaderOutDTblwcMap"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcMap_HeaderOutDTblwcMap.wcMapId" />
				<COLUMN ID="2" Name="wcMap_HeaderOutDTblwcMap.wcMap" />
				<COLUMN ID="3" Name="wcMap_HeaderOutDTblwcMap.Cache_Control" />
				<COLUMN ID="4" Name="wcMap_HeaderOutDTblwcMap.Pragma" />
				<COLUMN ID="5" Name="wcMap_HeaderOutDTblwcMap.Transfer_Encoding" />
				<COLUMN ID="6" Name="wcMap_HeaderOutDTblwcMap.Content_Type" />
				<COLUMN ID="7" Name="wcMap_HeaderOutDTblwcMap.Content_Encoding" />
				<COLUMN ID="8" Name="wcMap_HeaderOutDTblwcMap.Expires" />
				<COLUMN ID="9" Name="wcMap_HeaderOutDTblwcMap.Vary" />
				<COLUMN ID="10" Name="wcMap_HeaderOutDTblwcMap.Server" />
				<COLUMN ID="11" Name="wcMap_HeaderOutDTblwcMap.X_AspNet_Version" />
				<COLUMN ID="12" Name="wcMap_HeaderOutDTblwcMap.X_Powered_By" />
				<COLUMN ID="13" Name="wcMap_HeaderOutDTblwcMap.Date" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="B4E2632D-01D7-43EC-B9A7-5741C26A3ED7" Name="wcMap_OutDSetpins" TableID="FE147B5B-3E2F-4887-A945-010D064454A4" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcMap_OutDTblpins"."pinsId", "wcMap_OutDTblpins"."pins", "wcMap_OutDTblpins"."title", "wcMap_OutDTblpins"."id", "wcMap_OutDTblpins"."type", "wcMap_OutDTblpins"."subtitle", "wcMap_OutDTblpins"."latitude", "wcMap_OutDTblpins"."address", "wcMap_OutDTblpins"."longitude" FROM "wcMap_OutDTblpins"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcMap_OutDTblpins.pinsId" />
				<COLUMN ID="2" Name="wcMap_OutDTblpins.pins" />
				<COLUMN ID="3" Name="wcMap_OutDTblpins.title" />
				<COLUMN ID="4" Name="wcMap_OutDTblpins.id" />
				<COLUMN ID="5" Name="wcMap_OutDTblpins.type" />
				<COLUMN ID="6" Name="wcMap_OutDTblpins.subtitle" />
				<COLUMN ID="7" Name="wcMap_OutDTblpins.latitude" />
				<COLUMN ID="8" Name="wcMap_OutDTblpins.address" />
				<COLUMN ID="9" Name="wcMap_OutDTblpins.longitude" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="1BF5B9B5-C32F-46F9-94D2-F1C14465BD71" Name="wcMap_OutDSetwcMap" TableID="404F6D12-0F3D-46F3-B343-B654C6ABFFF4" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcMap_OutDTblwcMap"."wcMapId", "wcMap_OutDTblwcMap"."wcMap", "wcMap_OutDTblwcMap"."success", "wcMap_OutDTblwcMap"."error" FROM "wcMap_OutDTblwcMap"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcMap_OutDTblwcMap.wcMapId" />
				<COLUMN ID="2" Name="wcMap_OutDTblwcMap.wcMap" />
				<COLUMN ID="3" Name="wcMap_OutDTblwcMap.success" />
				<COLUMN ID="4" Name="wcMap_OutDTblwcMap.error" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="0BAF45CC-1903-4D9C-AEDB-D800FA987092" Name="wcSquareView_InDSet" TableID="7620770A-B7DC-4A83-8CD1-F2C657016A59" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcSquareView_InDTbl"."rowNumber", "wcSquareView_InDTbl"."pageNumber" FROM "wcSquareView_InDTbl"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcSquareView_InDTbl.rowNumber" />
				<COLUMN ID="2" Name="wcSquareView_InDTbl.pageNumber" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="73693DCF-2798-45B4-A19E-5C3E327D29AF" Name="wcSquareView_OutDSetnews" TableID="422B7D2E-F8C2-4C74-AEC4-20B7C076D248" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcSquareView_OutDTblnews"."newsId", "wcSquareView_OutDTblnews"."news", "wcSquareView_OutDTblnews"."title", "wcSquareView_OutDTblnews"."id", "wcSquareView_OutDTblnews"."type", "wcSquareView_OutDTblnews"."description", "wcSquareView_OutDTblnews"."id1", "wcSquareView_OutDTblnews"."url" FROM "wcSquareView_OutDTblnews"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcSquareView_OutDTblnews.newsId" />
				<COLUMN ID="2" Name="wcSquareView_OutDTblnews.news" />
				<COLUMN ID="3" Name="wcSquareView_OutDTblnews.title" />
				<COLUMN ID="4" Name="wcSquareView_OutDTblnews.id" />
				<COLUMN ID="5" Name="wcSquareView_OutDTblnews.type" />
				<COLUMN ID="6" Name="wcSquareView_OutDTblnews.description" />
				<COLUMN ID="7" Name="wcSquareView_OutDTblnews.id1" />
				<COLUMN ID="8" Name="wcSquareView_OutDTblnews.url" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="D7CFB943-3453-4F14-8162-4BC5AAFF4C11" Name="wcTwitter_OutDSetwcTwitter" TableID="CDDE33E2-780C-4363-83A6-0AD48CD6449F" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcTwitter_OutDTblwcTwitter"."wcTwitterId", "wcTwitter_OutDTblwcTwitter"."wcTwitter", "wcTwitter_OutDTblwcTwitter"."coordinates" FROM "wcTwitter_OutDTblwcTwitter"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcTwitter_OutDTblwcTwitter.wcTwitterId" />
				<COLUMN ID="2" Name="wcTwitter_OutDTblwcTwitter.wcTwitter" />
				<COLUMN ID="3" Name="wcTwitter_OutDTblwcTwitter.coordinates" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="A8D0441C-A42D-4956-A0FC-6A6BD9DD387C" Name="wcTwitter_RequestHeadersDSet" TableID="3730FAD9-5699-4D74-A9A4-E17A60D3A2EF" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "wcTwitter_RequestHeadersDTbl"."Authorization" FROM "wcTwitter_RequestHeadersDTbl"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="wcTwitter_RequestHeadersDTbl.Authorization" />
			</COLUMNS>
		</DATASET>
	</DATASETS>
	<WEBCLIENTS>
		<WEBCLIENT ID="BE326890-073A-4F1D-9C9C-2FB3FA46B4B4" Name="wcListView" HostUrl="http://services.smartface.io/SmartfaceInAction/News?page=${pagenumber}&amp;rowNumber=${rowNumber}" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="0" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/json" WriteMode="1">
			<SendParams>
				<Params>
					<Param Name="rowNumber" Value="Data.wcListView_InDSet.rowNumber" SROffset="0" Parent="URL" />
					<Param Name="pagenumber" Value="Data.wcListView_InDSet.pagenumber" SROffset="1" Parent="URL" />
				</Params>
			</SendParams>
			<ReceiveParams>
				<Params>
					<Param XPath="$.news" Value="Data.wcListView_OutDSetnews.news" Parent="BODY" />
					<Param XPath="$.news.title" Value="Data.wcListView_OutDSetnews.title" Parent="BODY" />
					<Param XPath="$.news.id" Value="Data.wcListView_OutDSetnews.id" Parent="BODY" />
					<Param XPath="$.news.type" Value="Data.wcListView_OutDSetnews.type" Parent="BODY" />
					<Param XPath="$.news.description" Value="Data.wcListView_OutDSetnews.description" Parent="BODY" />
					<Param XPath="$.news.image.id" Value="Data.wcListView_OutDSetnews.id1" Parent="BODY" />
					<Param XPath="$.news.image.url" Value="Data.wcListView_OutDSetnews.url" Parent="BODY" />
				</Params>
			</ReceiveParams>
			<CustomRequestHeaders>
			</CustomRequestHeaders>
			<ONSYNDICATIONSUCCESS script="Project_wcListView_OnSyndicationSuccess(e);" />
		</WEBCLIENT>
		<WEBCLIENT ID="18D8B820-57A9-4DD6-B70E-D5073B0D25D5" Name="wcMap" HostUrl="http://services.smartface.io/SmartfaceInAction/Maps" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="0" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/json" WriteMode="1">
			<SendParams>
			</SendParams>
			<ReceiveParams>
				<Params>
					<Param XPath="$" Value="Data.wcMap_OutDSetwcMap.wcMap" Parent="BODY" />
					<Param XPath="$.pins" Value="Data.wcMap_OutDSetpins.pins" Parent="BODY" />
					<Param XPath="$.pins.title" Value="Data.wcMap_OutDSetpins.title" Parent="BODY" />
					<Param XPath="$.pins.id" Value="Data.wcMap_OutDSetpins.id" Parent="BODY" />
					<Param XPath="$.pins.type" Value="Data.wcMap_OutDSetpins.type" Parent="BODY" />
					<Param XPath="$.pins.subtitle" Value="Data.wcMap_OutDSetpins.subtitle" Parent="BODY" />
					<Param XPath="$.pins.latitude" Value="Data.wcMap_OutDSetpins.latitude" Parent="BODY" />
					<Param XPath="$.pins.address" Value="Data.wcMap_OutDSetpins.address" Parent="BODY" />
					<Param XPath="$.pins.longitude" Value="Data.wcMap_OutDSetpins.longitude" Parent="BODY" />
					<Param XPath="$.success" Value="Data.wcMap_OutDSetwcMap.success" Parent="BODY" />
					<Param XPath="$.error" Value="Data.wcMap_OutDSetwcMap.error" Parent="BODY" />
					<Param XPath="$" Value="Data.wcMap_HeaderOutDSetwcMap.wcMap" Parent="HEADER" />
					<Param XPath="$.Cache-Control" Value="Data.wcMap_HeaderOutDSetwcMap.Cache_Control" Parent="HEADER" />
					<Param XPath="$.Pragma" Value="Data.wcMap_HeaderOutDSetwcMap.Pragma" Parent="HEADER" />
					<Param XPath="$.Transfer-Encoding" Value="Data.wcMap_HeaderOutDSetwcMap.Transfer_Encoding" Parent="HEADER" />
					<Param XPath="$.Content-Type" Value="Data.wcMap_HeaderOutDSetwcMap.Content_Type" Parent="HEADER" />
					<Param XPath="$.Content-Encoding" Value="Data.wcMap_HeaderOutDSetwcMap.Content_Encoding" Parent="HEADER" />
					<Param XPath="$.Expires" Value="Data.wcMap_HeaderOutDSetwcMap.Expires" Parent="HEADER" />
					<Param XPath="$.Vary" Value="Data.wcMap_HeaderOutDSetwcMap.Vary" Parent="HEADER" />
					<Param XPath="$.Server" Value="Data.wcMap_HeaderOutDSetwcMap.Server" Parent="HEADER" />
					<Param XPath="$.X-AspNet-Version" Value="Data.wcMap_HeaderOutDSetwcMap.X_AspNet_Version" Parent="HEADER" />
					<Param XPath="$.X-Powered-By" Value="Data.wcMap_HeaderOutDSetwcMap.X_Powered_By" Parent="HEADER" />
					<Param XPath="$.Date" Value="Data.wcMap_HeaderOutDSetwcMap.Date" Parent="HEADER" />
				</Params>
			</ReceiveParams>
			<CustomRequestHeaders>
			</CustomRequestHeaders>
			<ONSYNDICATIONSUCCESS script="Project_wcMap_OnSyndicationSuccess(e);" />
		</WEBCLIENT>
		<WEBCLIENT ID="61F1A29C-FF96-4451-922E-608F42B1D058" Name="wcSquareView" HostUrl="http://services.smartface.io/SmartfaceInAction/News?page=${pageNumber}&amp;rowNumber=${rowNumber}" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="0" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/json" WriteMode="1">
			<SendParams>
				<Params>
					<Param Name="rowNumber" Value="Data.wcSquareView_InDSet.rowNumber" SROffset="0" Parent="URL" />
					<Param Name="pageNumber" Value="Data.wcSquareView_InDSet.pageNumber" SROffset="1" Parent="URL" />
				</Params>
			</SendParams>
			<ReceiveParams>
				<Params>
					<Param XPath="$.news" Value="Data.wcSquareView_OutDSetnews.news" Parent="BODY" />
					<Param XPath="$.news.title" Value="Data.wcSquareView_OutDSetnews.title" Parent="BODY" />
					<Param XPath="$.news.id" Value="Data.wcSquareView_OutDSetnews.id" Parent="BODY" />
					<Param XPath="$.news.type" Value="Data.wcSquareView_OutDSetnews.type" Parent="BODY" />
					<Param XPath="$.news.description" Value="Data.wcSquareView_OutDSetnews.description" Parent="BODY" />
					<Param XPath="$.news.image.id" Value="Data.wcSquareView_OutDSetnews.id1" Parent="BODY" />
					<Param XPath="$.news.image.url" Value="Data.wcSquareView_OutDSetnews.url" Parent="BODY" />
				</Params>
			</ReceiveParams>
			<CustomRequestHeaders>
			</CustomRequestHeaders>
			<ONSYNDICATIONSUCCESS script="Project_wcSquareView_OnSyndicationSuccess(e);" />
		</WEBCLIENT>
		<WEBCLIENT ID="CD0225BA-CAB8-4055-9C2B-04682307F74A" Name="wcTwitter" HostUrl="https://api.twitter.com/1.1/statuses/user_timeline.json?count=${count}&amp;screen_name=smartface_io" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="0" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/xml" WriteMode="1">
			<SendParams>
			</SendParams>
			<ReceiveParams>
				<Params>
					<Param XPath="plain" Value="" Parent="BODY" />
					<Param XPath="$" Value="Data.wcTwitter_OutDSetwcTwitter.wcTwitter" Parent="BODY" />
				</Params>
			</ReceiveParams>
			<CustomRequestHeaders>
				<Params>
					<Param Name="Authorization" Value="Data.wcTwitter_RequestHeadersDSet.Authorization" />
				</Params>
			</CustomRequestHeaders>
			<ONSYNDICATIONSUCCESS script="Project_wcTwitter_OnSyndicationSuccess(e);" />
		</WEBCLIENT>
	</WEBCLIENTS>
	<GLOBALEVENTS>
		<ONSTART script="Global_Events_OnStart(e);" />
		<ONLOCATIONCHANGED script="Global_Events_OnLocationChanged(e);" />
		<ONERROR script="Global_Events_OnError(e);" />
	</GLOBALEVENTS>
</PROJECT>
</SMARTFACEPROJECT>