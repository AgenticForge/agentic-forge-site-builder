import streamlit as st
import pandas as pd
import plotly.express as px
from ydata_profiling import ProfileReport
from streamlit_pandas_profiling import st_profile_report
import sqlite3

st.title("📊 Data Visualizer & EDA Tool")

# Upload file
uploaded_file = st.file_uploader("Upload CSV or Excel", type=["csv", "xlsx"])
db_file = st.file_uploader("Or upload SQL database file (.db)", type=["db"])

if uploaded_file:
    # Read CSV/Excel
    if uploaded_file.name.endswith(".csv"):
        df = pd.read_csv(uploaded_file)
    else:
        df = pd.read_excel(uploaded_file)

elif db_file:
    conn = sqlite3.connect(db_file)
    tables = pd.read_sql("SELECT name FROM sqlite_master WHERE type='table';", conn)
    table_choice = st.selectbox("Select table", tables['name'])
    df = pd.read_sql(f"SELECT * FROM {table_choice}", conn)
else:
    df = None

if df is not None:
    st.subheader("Data Preview")
    st.dataframe(df.head())

    # Cleaning
    df = df.drop_duplicates()
    df = df.fillna(method='ffill')

    st.write("### Data Summary")
    st.write(df.describe())
    st.write("Shape:", df.shape)

    # Visualizations
    st.subheader("Visualizations")

    # 1. Histogram
    num_col = st.selectbox("Select numerical column for Histogram", df.select_dtypes(include='number').columns)
    fig1 = px.histogram(df, x=num_col)
    st.plotly_chart(fig1)

    # 2. Bar Chart
    cat_col = st.selectbox("Select categorical column for Bar Chart", df.select_dtypes(exclude='number').columns)
    fig2 = px.bar(df[cat_col].value_counts().reset_index(), x='index', y=cat_col)
    st.plotly_chart(fig2)

    # 3. Scatter Plot
    scatter_x = st.selectbox("X-axis", df.select_dtypes(include='number').columns, index=0)
    scatter_y = st.selectbox("Y-axis", df.select_dtypes(include='number').columns, index=1)
    fig3 = px.scatter(df, x=scatter_x, y=scatter_y)
    st.plotly_chart(fig3)

    # 4. Correlation Heatmap
    fig4 = px.imshow(df.corr(), text_auto=True)
    st.plotly_chart(fig4)

    # EDA Report
    st.subheader("📑 EDA Report")
    profile = ProfileReport(df, explorative=True)
    st_profile_report(profile)
